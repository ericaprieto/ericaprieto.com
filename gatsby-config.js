module.exports = {
  siteMetadata: {
    title: "erica prieto | web developer",
    author: "Erica Prieto",
    description:
      "A plant-powered javascript developer that can help you with your front-end needs",
    siteUrl: "https://ericaprieto.com"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-component",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 650
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-159209586-2"
      }
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "erica prieto | web developer",
        short_name: "ericaprieto.com",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#8e44ad",
        display: "minimal-ui",
        icon: "static/favicon.png"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-catch-links"
  ]
}
