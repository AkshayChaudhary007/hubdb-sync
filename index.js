const fetchBlogs = require("./src/fetchBlogs");
const fetchBlogGroups = require("./src/fetchBlogGroups");
const fetchBlogTags = require("./src/fetchBlogTags");
const fetchLandingPages = require("./src/fetchLandingPages");
const fetchLandingPageDetails = require("./src/fetchLandingPageDetails");

const {
    transformBlogs,
    transformLandingPages
} = require("./src/transform");

const saveJson = require("./src/saveJson");

async function sync() {

    try {

        console.log("Fetching Blogs...");
        const blogs = await fetchBlogs();

        console.log("Fetching Blog Groups...");
        const blogGroups = await fetchBlogGroups();

        console.log("Fetching Blog Tags...");
        const blogTags = await fetchBlogTags();

        console.log("Fetching Landing Pages...");
        const pages = await fetchLandingPages();

        console.log("Fetching Landing Page Details...");

        const detailedPages = [];

        for (const page of pages) {

            const detail = await fetchLandingPageDetails(page.id);

            detailedPages.push(detail);

        }

        const resources = [

            ...transformBlogs(
                blogs,
                blogTags,
                blogGroups
            ),

            ...transformLandingPages(
                detailedPages
            )

        ];

        saveJson(resources);

        console.log("resources.json created");

    }

    catch (error) {

        console.log(error.response?.data || error.message);

    }

}

sync();