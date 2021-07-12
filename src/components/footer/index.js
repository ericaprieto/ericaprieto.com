import React from "react"
import { nest } from "recompose"
import styled from "styled-components"
import theme from "../../theme"
import Wrap from "../wrap"
import Tool from "./tool"

const tools = [
  {
    link: "https://facebook.github.io/react",
    name: "React",
    logo: require("./react.svg"),
  },
  {
    link: "https://gatsbyjs.org",
    name: "GatsbyJS",
    logo: require("./gatsby.svg"),
  },
  {
    link: "https://www.netlify.com",
    name: "Netlify",
    logo: require("./netlify.svg"),
  },
]

const Wrapper = nest(
  styled.footer`
    margin-top: auto;
    background-color: ${theme.darkBackgroundColor};
    color: ${theme.darkBackgroundTextColor};
    padding: 40px 0 75px;
    text-align: center;
    font-size: 13px;
    font-family: ${theme.titleFont};
  `,
  Wrap
)

const Info = styled.div`
  margin-bottom: 18px;
`

const ToolList = styled.div`
  display: flex;
  margin-top: 25px;

  & > * {
    margin: 0 16px;

    &:first-child {
      margin-left: auto;
    }

    &:last-child {
      margin-right: auto;
    }
  }
`

const AuthorName = styled.span`
  color: ${theme.baseColor};
`

const authorName = <AuthorName>Erica Prieto</AuthorName>

const sourceLink = (
  <a
    href="https://github.com/ericaprieto/ericaprieto.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    here
  </a>
)

const renderTool = (tool) => <Tool key={tool.name} {...tool} />

const footer = () => (
  <Wrapper>
    <Info>Check my code {sourceLink}!</Info>
    <Info>Made with ♥ by {authorName} and powered by</Info>
    <ToolList>{tools.map(renderTool)}</ToolList>
  </Wrapper>
)

export default footer
