import React from "react"
import styled from "styled-components"

const Logo = styled.img`
  height: 21px;
  margin-bottom: 9px;
`

const Wrapper = styled.a.attrs({
  target: "_blank",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 0.8em;
  text-decoration: none;
  transition: color 200ms linear;
`

const Tool = ({ name, logo: logoSrc, link }) => (
  <Wrapper href={link}>
    <Logo src={logoSrc} />
    <span>{name}</span>
  </Wrapper>
)

export default Tool
