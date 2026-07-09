const axios = require("axios");
const { token } = require("./config");

async function fetchBlogTags() {

    const response = await axios.get(
        "https://api.hubapi.com/cms/v3/blogs/tags",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data.results;
}

module.exports = fetchBlogTags;