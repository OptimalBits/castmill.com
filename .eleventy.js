const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const readingTime = require("eleventy-plugin-reading-time");
const Image = require("@11ty/eleventy-img");

const { DateTime } = require("luxon");

async function imageShortcode(src, alt, sizes) {
  const metadata = await Image(src, {
    widths: [300, 600],
    formats: ["jpeg"],
    outputDir: "docs/images",
    urlPath: "/images",
  });

  const imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(readingTime);

  // Passthroughs
  eleventyConfig.addPassthroughCopy("src/css/global.css");
  eleventyConfig.addPassthroughCopy("src/images");

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
        const metadata = await Image(src, {
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

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
