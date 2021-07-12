import styled, { createGlobalStyle } from "styled-components"
import theme from "../../theme"

const titleFont = theme.titleFont
const titleColor = theme.baseColor
const subtitleColor = "#666"
const textColor = "#444"
const contentLeftWidth = "240px"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans";
    background-color: #fff;
    color: ${textColor};
    font-size: 17px;
  }
`

export const Wrapper = styled.div`
  width: 1100px;
  padding: 20px 50px;
  margin: 10px auto;
`

export const TagList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 !important;

  li {
    display: inline-block;
    padding: 5px 7px;
    font-size: 12px;
    line-height: 1;
    border-radius: 4px;
    background-color: #eee;
    color: #666;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    margin: 0 5px 4px 0;
    -webkit-print-color-adjust: exact;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
`

export const HeaderTitle = styled.div`
  color: ${titleColor};
  font-family: ${titleFont};
  font-weight: normal;
  text-transform: uppercase;
  font-size: 44px;
`

export const HeaderSubtitle = styled.div`
  color: ${subtitleColor};
  font-weight: lighter;
  font-size: 20px;
  letter-spacing: 0.1px;
  padding-left: 2px;
`

export const HeaderContacts = styled.ul`
  list-style: none;
  margin: 0;
  margin-left: auto;
  font-weight: lighter;
  font-size: 15px;

  li {
    margin-bottom: 3px;
  }

  svg {
    height: 0.8rem;
    position: relative;
    top: 1px;
    opacity: 0.7;
  }
`

export const Separator = styled.div`
  border-top: 1px solid #ddd;
  margin: 25px 0;
`

export const Content = styled.div`
  display: flex;

  & > aside {
    width: ${contentLeftWidth};
    flex-shrink: 0;
    margin-right: 30px;
  }
`

export const ContentSection = styled.div`
  margin-bottom: 35px;

  ul {
    padding: 0 0 0 21px;
    margin: 0;
  }
`

export const ContentTitle = styled.div`
  color: ${titleColor};
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 18px;
  margin-bottom: 15px;
`

export const Job = styled.div`
  margin-bottom: 35px;
  font-size: 14px;
`

export const JobDetails = styled.div`
  color: ${subtitleColor};
  font-weight: lighter;
  font-weight: 14px;
`

export const CompanyName = styled.div`
  font-size: 16px;
  font-weight: bolder;
`

export const JobDescription = styled.div`
  padding-top: 10px;

  p {
    margin: 0 0 10px 0;
  }
`
