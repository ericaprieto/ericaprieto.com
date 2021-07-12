import React from "react"
import resume from "../../resume.json"
import GlobeIcon from "./globe-icon"
import AtIcon from "./at-icon"
import {
  GlobalStyle,
  Wrapper,
  TagList,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  HeaderContacts,
  Separator,
  Content,
  ContentSection,
  ContentTitle,
  Job,
  JobDetails,
  CompanyName,
  JobDescription,
} from "./components"

const age = Math.floor(
  (new Date() - new Date(1991, 8, 21)) / 1000 / 60 / 60 / 24 / 365
)

const renderTech = (tech, index) => <li key={index}>{tech}</li>

const renderInternationalExperience = (experience, index) => (
  <Job key={index}>
    <div>
      <CompanyName>
        {`${experience.country} - ${experience.company}`}
      </CompanyName>
      <JobDetails>{experience.period}</JobDetails>
    </div>
    <JobDescription>
      <p>{experience.description}</p>
    </JobDescription>
  </Job>
)

const renderHistory = (job, index) => (
  <Job key={index}>
    <div>
      <CompanyName>{job.company}</CompanyName>
      <JobDetails>{`${job.position}, ${job.period}`}</JobDetails>
    </div>
    <JobDescription>
      <p>{job.description}</p>
      <TagList>{job.techs.map(renderTech)}</TagList>
    </JobDescription>
  </Job>
)

const PrintableResume = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600"
        rel="stylesheet"
        type="text/css"
      />
      <Header>
        <div>
          <HeaderTitle>Erica Magliaro Prieto</HeaderTitle>
          <HeaderSubtitle>Web Developer</HeaderSubtitle>
        </div>
        <HeaderContacts>
          <li>
            <GlobeIcon /> https://ericaprieto.com
          </li>
          <li>
            <AtIcon /> hello@ericaprieto.com
          </li>
        </HeaderContacts>
      </Header>
      <Separator />
      <Content>
        <aside>
          <ContentSection>
            <ContentTitle>Personal Info</ContentTitle>
            <ul>
              <li>{age} years old</li>
              <li>Sao Paulo / SP - Brazil</li>
              <li>Native Portuguese</li>
              <li>Fluent English</li>
            </ul>
          </ContentSection>
          <ContentSection>
            <ContentTitle>Already worked with</ContentTitle>
            <TagList>{resume.techs.workWith.map(renderTech)}</TagList>
          </ContentSection>
          <ContentSection>
            <ContentTitle>Would work with</ContentTitle>
            <TagList>{resume.techs.wouldWorkWith.map(renderTech)}</TagList>
          </ContentSection>
          <ContentSection>
            <ContentTitle>Don't want to work with</ContentTitle>
            <TagList>{resume.techs.wouldntWorkWith.map(renderTech)}</TagList>
          </ContentSection>
          <ContentSection>
            <ContentTitle>International Experience</ContentTitle>
            {resume.internationalExperience.map(renderInternationalExperience)}
          </ContentSection>
        </aside>
        <main>
          <ContentSection>
            <ContentTitle>Professional Experience</ContentTitle>
            {resume.history.map(renderHistory)}
          </ContentSection>
        </main>
      </Content>
    </Wrapper>
  )
}

export default PrintableResume
