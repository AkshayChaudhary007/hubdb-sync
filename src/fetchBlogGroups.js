const axios = require("axios");
const { token } = require("./config");

async function fetchBlogGroups() {

    const response = await axios.get(
        "https://api.hubapi.com/content/api/v2/blogs",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data.objects;

}

module.exports = fetchBlogGroups;