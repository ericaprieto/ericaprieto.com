import { nest } from "recompose"
import styled from "styled-components"
import theme from "../../theme"

const Avatar = nest(
  styled.a.attrs({
    href: "https://ericaprieto.com",
    target: "_blank",
  })``,
  styled.img.attrs({
    src: "/img/avatar.jpg",
    alt: "",
  })`
    width: 160px;
    height: 160px;
    border-radius: 100%;
    border: 4px solid ${theme.baseColor};
    padding: 4px;
  `
)

export default Avatar
