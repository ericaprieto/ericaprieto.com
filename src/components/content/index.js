import styled from "styled-components"
import { nest } from "recompose"
import Wrap from "../wrap"

const Content = nest(
  styled.main`
    padding: 40px 0;
    overflow-x: hidden;
  `,
  Wrap
)

export default Content
