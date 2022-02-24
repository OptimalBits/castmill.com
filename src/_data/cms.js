const axios = require("axios");

module.exports = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data.slice(0, 5);
};
