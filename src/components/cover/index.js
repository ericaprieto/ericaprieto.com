import React from "react"
import styled from "styled-components"
import { nest } from "recompose"
import theme from "../../theme"
import Wrap from "../wrap"

const Wrapper = nest(
  styled.div`
    background-color: ${theme.darkBackgroundColor};
    color: ${theme.darkBackgroundTextColor};
    padding-top: ${(p) => (p.main ? `${theme.headerHeight + 45}px` : "45px")};
    padding-bottom: 45px;
    font-family: ${theme.titleFont};
    position: relative;
    top: ${(p) => (p.main ? `-${theme.headerHeight}px` : "0")};
    font-size: 16px;

    @media (min-width: 1280px) {
      font-size: 20px;
    }

    ${(p) =>
      p.backgroundImage &&
      `
      background-image: url(${p.backgroundImage});
      background-size: cover;
      background-position: center center;
      min-height: 40vw;
      display: flex;
      flex-direction: column;

      * {
        color: #d6d6d6 !important;
      }
    `};
  `,
  styled(Wrap)`
    ${(p) =>
      p.backgroundImage &&
      `
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
  `
)

const Hero = styled.div`
  font-size: 6.25em;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${theme.highlightedTextColor};

  @media (max-width: 740px) {
    font-size: 5em;
  }
`

const Title = styled.div`
  font-size: 1.875em;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${theme.highlightedTextColor};
`

const Subtitle = styled.div`
  font-size: 1em;
  line-height: 1.4;
`

const PageHeader = ({
  hero: heroText,
  title: titleText,
  subtitle: subtitleText,
  backgroundImage,
  main,
}) => (
  <Wrapper main={main} backgroundImage={backgroundImage}>
    {heroText && <Hero>{heroText}</Hero>}
    {titleText && <Title>{titleText}</Title>}
    {subtitleText && <Subtitle>{subtitleText}</Subtitle>}
  </Wrapper>
)

export default PageHeader
