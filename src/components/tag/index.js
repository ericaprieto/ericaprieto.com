import styled from "styled-components"
import theme from "../../theme"

const branch = (prop, left, right) => (props) => (props[prop] ? left : right)

const Tag = styled.div`
  display: inline-block;
  padding: ${branch("small", "4px 7px", "6px 13px")};
  font-size: 11px;
  color: ${branch("inverse", "#fff", theme.baseColor)};
  background: ${branch("inverse", theme.baseColor, "transparent")};
  border: 1px solid ${theme.baseColor};
  border-radius: 4px;
  font-family: ${theme.titleFont};
  margin: 0 6px 8px 0;
  font-weight: ${branch("inverse", "bold", "normal")};
`

export default Tag
