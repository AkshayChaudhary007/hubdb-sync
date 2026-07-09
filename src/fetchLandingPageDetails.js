const axios = require("axios");
const { token } = require("./config");

async function fetchLandingPageDetails(pageId) {

    const response = await axios.get(
        `https://api.hubapi.com/cms/v3/pages/landing-pages/${pageId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;

}

module.exports = fetchLandingPageDetails;