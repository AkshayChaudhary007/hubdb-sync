const axios = require("axios");
const { token } = require("./config");

async function fetchLandingPages(){

    const response = await axios.get(
        "https://api.hubapi.com/cms/v3/pages/landing-pages",
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    );

    return response.data.results;

}

module.exports = fetchLandingPages;