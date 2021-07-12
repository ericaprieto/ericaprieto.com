import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import Cover from "../components/cover"
import Content from "../components/content"
import BaseAvatar from "../components/avatar"
import Resume from "../components/resume"
import SEO from "../components/seo"
import theme from "../theme"

const Avatar = styled(BaseAvatar)`
  @media (max-width: ${theme.breakpoint - 1}px) {
    align-self: center;
  }
`

const Intro = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;

  @media (max-width: ${theme.breakpoint - 1}px) {
    flex-direction: column;
  }
`

const IntroText = styled.div`
  padding-right: 20px;

  @media (max-width: ${theme.breakpoint - 1}px) {
    margin-top: 20px;
    padding-right: 0;
  }
`

const IndexContent = () => (
  <>
    <SEO largeShareCard />
    <Cover
      main
      backgroundImage="/img/coverBackground.jpg"
      hero="Hello,"
      title="My name is Erica"
      subtitle="and I'm a plant-powered brazilian girl, javascript miracle worker and vaporwave addicted"
    />
    <Content>
      <Intro>
        <Avatar />
        <IntroText>
          <p>
            I've been a software developer for almost 15 years now. I have
            worked with many languages, frameworks and libraries over the course
            of my career and I have been focusing on Javascript for half of that
            time.
          </p>
          <p>
            Today, my main interests are TypeScript and React, which I've been
            working with since it has been open sourced on 2013.
          </p>
          <p>
            <span>
              If you want to know more about me, you can check my resumé below,
              browse my{" "}
            </span>
            <a
              target="_blank"
              href="http://github.com/ericaprieto"
              rel="noopener noreferrer"
            >
              github
            </a>
            <span> or see some of my </span>
            <Link to="/work">work</Link>
          </p>
        </IntroText>
      </Intro>
    </Content>
    <Cover
      title="Resumé"
      subtitle={
        <div>
          <span>A brief history of what I've been up to</span>
          <br />
          <a href="/cv.pdf" target="_blank">
            Click here
          </a>
          <span> to download the full version on PDF</span>
        </div>
      }
    />
    <Content>
      <Resume />
    </Content>
  </>
)

export default IndexContent
