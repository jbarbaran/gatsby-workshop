module.exports = {
    siteMetadata: {
        title: `Javi`,
        author: `Javi`,
        description: `Mi blog`,
        siteUrl: `https://gatsby-workshop-site.netlify.app`
    },
    plugins: [
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-theme-blog`, 
            options: {
                basePath: `/blog`,
                mdxOtherwiseConfigured: true
            }
        }
    ]
}