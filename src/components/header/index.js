import React from "react"
import { nest } from "recompose"
import styled from "styled-components"
import Link from "gatsby-link"
import scrollToBottom from "../../lib/scroll-to-bottom"
import Wrap from "../wrap"
import theme from "../../theme"

const links = [
  { to: "/", label: "Home" },
  { to: "/work/", label: "Work" },
]

const Wrapper = nest(
  styled.header`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: ${theme.headerHeight}px;
    background-color: ${(p) =>
      p.showShadow ? theme.darkBackgroundColor : "transparent"};
    color: ${theme.darkBackgroundTextColor};
    user-select: none;
    font-family: ${theme.titleFont};
    box-shadow: ${(p) =>
      p.showShadow ? "0 0 2px 0 rgba(0,0,0,0.4)" : "unset"};
    transition: box-shadow 300ms linear, background-color 300ms linear;
    border-top: 3px solid ${theme.baseColor};

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      text-transform: lowercase;
      transition: color 200ms linear;

      &.active {
        color: ${theme.baseColor};
      }
    }
  `,
  styled(Wrap)`
    height: 100%;

    @media (min-width: ${theme.headerBreakpoint}px) {
      display: flex;
      align-items: center;
    }

    @media (max-width: ${theme.headerBreakpoint - 1}px) {
      padding: 12px 0;
    }
  `
)

const Logo = styled.h1`
  font-weight: normal;
  font-size: 18px;
  line-height: 1;
  margin: 0;

  @media (max-width: ${theme.headerBreakpoint - 1}px) {
    font-size: 16px;
    margin-bottom: 7px;
  }
`

const Menu = styled.nav`
  margin-left: auto;
  font-size: 14px;

  ul {
    margin: 0;
    padding: 0;
  }

  @media (min-width: ${theme.headerBreakpoint}px) {
    &,
    ul,
    li {
      height: 100%;
    }

    ul {
      display: flex;

      li {
        display: flex;
        align-items: center;
        &:not(:first-child) {
          margin-left: 40px;
        }
      }
    }
  }

  @media (max-width: ${theme.headerBreakpoint - 1}px) {
    li {
      display: inline-block;
      margin-right: 10px;
    }
  }
`

const renderLink = ({ label, to }) => (
  <li key={to}>
    <Link to={to} activeClassName="active">
      {label}
    </Link>
  </li>
)

const Header = ({ showShadow }) => (
  <Wrapper showShadow={showShadow}>
    <Logo>erica prieto | web developer</Logo>
    <Menu>
      <ul>
        {links.map(renderLink).concat(
          <li key="contact">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={scrollToBottom}>
              Contact
            </a>
          </li>
        )}
      </ul>
    </Menu>
  </Wrapper>
)

export default Header
