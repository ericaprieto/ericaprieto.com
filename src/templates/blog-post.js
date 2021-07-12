import React from "react"
import rehypeReact from "rehype-react"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Wrap from "../components/wrap"
import Bio from "../components/bio"
import Tag from "../components/tag"
import theme from "../theme"
import formatDate from "../lib/format-date"
import MediaPlayer from "../components/media-player"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "media-player": MediaPlayer },
}).Compiler

const Post = styled(Wrap)`
  max-width: ${theme.blogMaxWidth}px;
  margin: 0 auto;
  padding-top: 30px;
  color: ${theme.highlightedTextColor};
  font-size: 18px;

  a {
    color: ${theme.baseColor};

    &:hover {
      text-decoration: none;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.highlightedTextColor};
    font-family: ${theme.titleFont};
    font-weight: bold;
  }

  h1 {
    color: ${theme.baseColor};
    font-family: ${theme.titleFont};
    font-weight: normal;
    margin-bottom: 0;
  }

  p {
    line-height: 1.8;
    margin: 28px 0 32px;
  }

  .youtube {
    display: block;
    width: 100%;
    height: 340px;
    margin: 20px auto;
  }

  p > img {
    position: relative;
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  blockquote {
    border-left: 0.25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
    margin: 0;
  }

  twitter-widget {
    margin-left: auto;
    margin-right: auto;
  }
`

const Description = styled.div`
  font-size: 16px;
  color: ${theme.textColor};
  font-style: italic;
  margin-bottom: 16px;
`

const Tags = styled.div`
  margin-bottom: 12px;
`

const BioWrapper = styled.div`
  margin-bottom: 90px;
  margin-top: 90px;
  padding-top: 90px;
  border-top: 1px solid ${theme.baseColor};

  @media (max-width: ${theme.breakpoint - 1}px) {
    margin-bottom: 40px;
    margin-top: 70px;
    padding-top: 70px;
  }
`

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark
  const { title, description, date, tags } = post.frontmatter

  return (
    <Post>
      <SEO title={title} description={description || post.excerpt} />
      <script src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      <h1>{title}</h1>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag} small inverse>
            {tag}
          </Tag>
        ))}
      </Tags>
      <Description>{description}</Description>
      <Description>{formatDate(date)}</Description>
      <div>{renderAst(post.htmlAst)}</div>
      <BioWrapper>
        <Bio />
      </BioWrapper>
    </Post>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        date
        description
        tags
      }
    }
  }
`
