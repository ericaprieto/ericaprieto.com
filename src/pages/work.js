import React from "react"
import Cover from "../components/cover"
import Content from "../components/content"
import SEO from "../components/seo"
import { List as CaseList, Item as CaseItem } from "../components/cases"
import cases from "../cases.json"

const WorkPage = () => (
  <>
    <SEO largeShareCard title="Work" />
    <Cover
      main
      title="Work"
      subtitle="What are you waiting for? Your project could be here!"
    />
    <Content>
      <CaseList>
        {cases.map((data, index) => (
          <CaseItem key={index} {...data} />
        ))}
      </CaseList>
    </Content>
  </>
)

export default WorkPage
