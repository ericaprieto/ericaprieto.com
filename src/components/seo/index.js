import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const SEO = ({
  title,
  description,
  lang = "en",
  meta = [],
  keywords = [],
  largeShareCard,
}) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const metaDescription = description || data.site.siteMetadata.description
      const metaTitle = title
        ? `${title} | ${data.site.siteMetadata.title}`
        : data.site.siteMetadata.title

      return (
        <Helmet
          htmlAttributes={{ lang }}
          title={metaTitle.toLowerCase()}
          meta={[
            { name: `description`, content: metaDescription },
            { property: `og:title`, content: metaTitle.toLowerCase() },
            { property: `og:description`, content: metaDescription },
            { property: `og:type`, content: "website" },
            {
              property: "og:image",
              content: largeShareCard
                ? "https://ericaprieto.com/img/share.jpg?n=1"
                : "https://ericaprieto.com/img/avatar.jpg?n=1",
            },
            {
              name: `twitter:card`,
              content: largeShareCard ? "summary_large_image" : "summary",
            },
            { name: `twitter:creator`, content: data.site.siteMetadata.author },
            { name: `twitter:title`, content: metaTitle.toLowerCase() },
            { name: `twitter:description`, content: metaDescription },
            { name: "twitter:site", content: "@ericaprieto" },
            { name: "twitter:creator", content: "@ericaprieto" },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: "keywords",
                    content: keywords.join(`, `),
                  }
                : []
            )
            .concat(meta)}
        />
      )
    }}
  />
)

export default SEO
