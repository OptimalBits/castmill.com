const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const readingTime = require("eleventy-plugin-reading-time");
const Image = require("@11ty/eleventy-img");
const path = require("path");

const nunjucks = require("nunjucks");
const fs = require("fs");
const puppeteer = require("puppeteer");
const datauri = require("datauri");
const crypto = require("crypto");

const { DateTime } = require("luxon");

// We cache the getting of a browser and reuse it everywhere
let gettingBrowser;

const getPage = async () => {
  const browser = await gettingBrowser;
  return browser.newPage();
};

const createSocialImageForArticle = async (
  imageSrc,
  date,
  title,
  description,
  type,
  author,
  avatar,
  length,
  output
) => {
  const width = 1200;
  const height = 630;

  // Get datauri for the image
  const content = imageSrc.startsWith("https")
    ? imageSrc
    : await datauri(imageSrc);

  // Set puppeteer content
  const template = nunjucks.render("cover.njk", {
    image: content,
    type,
    title,
    description,
    author,
    avatar,
    length,
    date,
    width,
    height,
  });

  const page = await getPage();

  await page.setContent(template);

  // Save Puppeteer screenshot as jpeg
  await page.screenshot({
    path: output,
    type: "jpeg",
    quality: 85,
  });
};

function absPath(src) {
  let url;
  try {
    url = new URL(src);
  } catch (err) {}

  if (!url || !url.protocol) {
    src = path.join(__dirname, "src", src);
  }

  return src;
}

async function imageShortcode(src, alt, sizes, float) {
  const metadata = await Image(absPath(src), {
    widths: Array.isArray(sizes) ? sizes : [sizes],
    formats: ["jpeg"],
    outputDir: "docs/images",
    urlPath: "/images",
  });

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  let data = metadata.jpeg[metadata.jpeg.length - 1];
  const margin = float == "right" ? "margin-left" : "margin-right";
  const floatStyle = float ? `style="float:${float};${margin}: 2em;"` : "";
  return `<figure ${floatStyle}>
    <img class="rounded-lg" src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" 
    loading="lazy" decoding="async" style="margin-top:0;margin-bottom:0;">
    <figcaption>${alt}</figcaption>
    </figure>`;
}

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(readingTime);

  // Passthroughs
  eleventyConfig.addPassthroughCopy("src/css/global.css");
  eleventyConfig.addPassthroughCopy(
    "src/ahrefs_f802a3183786bc2a4a8adf9575d29047cadb641775fbb9337cf9c147188add9c"
  );
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/demos/assets");

  // Filters
  eleventyConfig.addFilter("hasFeature", function (package, feature) {
    return package.features.includes(feature);
  });

  eleventyConfig.addNunjucksAsyncFilter(
    "image",
    async function (src, width, callback) {
      try {
        if (!src) {
          return callback(null, "");
        }

        const metadata = await Image(absPath(src), {
          widths: [width],
          formats: ["jpeg"],
          outputDir: "docs/images",
          urlPath: "/images",
        });

        let data = metadata.jpeg[metadata.jpeg.length - 1];
        callback(null, data.url);
      } catch (err) {
        callback(err);
      }
    }
  );

  eleventyConfig.addNunjucksAsyncFilter(
    "coverize",
    async function (
      src,
      width,
      date,
      title,
      description,
      type,
      author,
      avatar,
      length,
      callback
    ) {
      try {
        if (!src) {
          return callback(null, "");
        }

        const checksum = crypto
          .createHash("md5")
          .update(`${src}${width}${title}${description}`)
          .digest("hex");

        const dstPath = `/images/cover-${checksum}.jpg`;
        const dst = `${__dirname}/docs${dstPath}`;

        await createSocialImageForArticle(
          absPath(src),
          date,
          title,
          description,
          type,
          author,
          avatar,
          length,
          dst
        );

        callback(null, dstPath);
      } catch (err) {
        callback(err);
      }
    }
  );

  // Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  // Import prior to `module.exports` within `.eleventy.js`
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("postDateLong", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_HUGE);
  });

  eleventyConfig.on("eleventy.before", async () => {
    if (!gettingBrowser) {
      gettingBrowser = puppeteer.launch({
        headless: true,
        defaultViewport: { width: 1200, height: 630 },
        args: ["--font-render-hinting=none", "--force-color-profile=srgb"],
      });
      await gettingBrowser;
    }
  });

  eleventyConfig.on("eleventy.after", async () => {
    console.log("Build complete");
    // Close puppeteer browser
    gettingBrowser && (await (await gettingBrowser).close());
    gettingBrowser = null;
  });

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
