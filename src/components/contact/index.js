import React from "react"
import { nest } from "recompose"
import styled from "styled-components"
import Wrap from "../wrap"
import theme from "../../theme"

const Wrapper = nest(
  styled.footer`
    position: relative;
    padding: 60px 0;
    background: #e0e0e0;
    color: #5d5d5d;
    text-align: center;
    font-family: ${theme.titleFont};

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 20px;
      font-size: 14px;

      @media (max-width: 700px) {
        display: block;
        margin: 20px auto 0;
        font-size: 12px;

        &:first-child {
          margin-top: 0;
        }
      }

      a {
        text-decoration: none;
        text-transform: lowercase;
      }
    }
  `,
  Wrap
)

const Popover = styled.div`
  background-color: ${theme.baseColor};
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  color: #f0f0f0;
  font-size: 18px;
  font-family: "Helvetica", sans-serif;
  width: 300px;
  left: calc(50% - 150px);
  top: 0;
  padding: 18px 10px;
  position: absolute;
  pointer-events: none;

  &:before {
    border-top: 11px solid ${theme.baseColor};
    border-right: 11px solid transparent;
    border-left: 11px solid transparent;
    bottom: -11px;
    content: "";
    display: block;
    left: 50%;
    margin-left: -11px;
    position: absolute;
  }

  transition: all 500ms cubic-bezier(0.1, 0.7, 0.3, 1);
  transform: translateY(${(p) => (p.showPopover ? "-40px" : "-25px")});
  opacity: ${(p) => (p.showPopover ? "1" : "0")};
`

// function preventDefault(e) {
//   e.preventDefault()
// }

const ExternalLink = ({ href, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {label}
  </a>
)

const Contact = ({ showPopover }) => (
  <Wrapper>
    <Popover showPopover={showPopover}>Get in touch!</Popover>
    <ul>
      <li>
        <ExternalLink href="https://github.com/ericaprieto" label="GitHub" />
      </li>
      <li>
        <ExternalLink
          href="http://br.linkedin.com/in/ericamprieto"
          label="LinkedIn"
        />
      </li>
      <li>
        <a href="mailto:hello@ericaprieto.com">hello@ericaprieto.com</a>
      </li>
    </ul>
  </Wrapper>
)

export default Contact
