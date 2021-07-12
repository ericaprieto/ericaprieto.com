import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Wrap from "../components/wrap"
import Bio from "../components/bio"
import BlogPostItem from "../components/blog-post-item"
import SEO from "../components/seo"
import theme from "../theme"

const Content = styled(Wrap)`
  max-width: ${theme.blogMaxWidth}px;
`

const BioWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 80px;

  @media (max-width: ${theme.breakpoint - 1}px) {
    margin-top: 30px;
  }
`

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Content>
      <SEO
        largeShareCard
        title="Blog"
        description="Coisas sobre a vida, os dramas e alegrias de uma mulher trans
      desenvolvedora"
      />
      <BioWrapper>
        <Bio />
      </BioWrapper>
      {posts.map(({ node }) => (
        <BlogPostItem node={node} key={node.fields.slug} />
      ))}
    </Content>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            tags
          }
        }
      }
    }
  }
`
