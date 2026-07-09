const axios = require("axios");
const { token } = require("./config");

async function fetchBlogs() {

    const response = await axios.get(
        "https://api.hubapi.com/cms/v3/blogs/posts",
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    );

    return response.data.results;

}

module.exports = fetchBlogs;