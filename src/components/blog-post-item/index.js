import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Tag from "../tag"
import theme from "../../theme"
import formatDate from "../../lib/format-date"

const Wrapper = styled.div`
  margin-bottom: 80px;

  @media (min-width: ${theme.breakpoint}px) {
    margin-bottom: 120px;
  }

  h3 {
    font-family: ${theme.titleFont};
    color: ${theme.baseColor};
    font-weight: normal;
    margin-bottom: 7px;
    font-size: 21px;

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  small {
    display: block;
    margin-bottom: 20px;
    font-style: italic;
  }

  p {
    margin: 0;
  }
`

const BlogPostItem = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const tags = node.frontmatter.tags || []

  return (
    <Wrapper>
      <h3>
        <Link to={node.fields.slug}>{title}</Link>
      </h3>
      <div>
        {tags.map((tag) => (
          <Tag key={tag} small inverse>
            {tag}
          </Tag>
        ))}
      </div>
      <small>{formatDate(node.frontmatter.date)}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </Wrapper>
  )
}

export default BlogPostItem
