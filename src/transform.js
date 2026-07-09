function transformBlogs(blogs, blogTags) {

    return blogs.map(blog => ({

        content_id: blog.id,

        title: blog.name,

        slug: blog.slug,

        url: blog.url,

        type: "blog",

        image: blog.featuredImage || "",

        description: blog.metaDescription || "",

        publish_date: blog.publishDate,

        updated_date: blog.updated,

        tags: (blog.tagIds || []).map(tagId => {

            const tag = blogTags.find(item => item.id == tagId);

            return tag ? tag.name : tagId;

        })

    }));

}

function transformLandingPages(pages) {

    return pages.map(page => {

        const widget = Object.values(page.widgets || {}).find(

            item => item.body?.resource_tags !== undefined

        );

        return {

            content_id: page.id,

            title: page.name,

            slug: page.slug,

            url: page.url,

            type: "landing-page",

            image: page.featuredImage || "",

            description: page.metaDescription || "",

            publish_date: page.publishDate,

            updated_date: page.updated,

            tags: widget?.body?.resource_tags
                ? widget.body.resource_tags
                    .split(",")
                    .map(tag => tag.trim())
                : [],

            show_in_resource_center:
                widget?.body?.show_in_resource_center || false

        };

    });

}

module.exports = {

    transformBlogs,

    transformLandingPages

};