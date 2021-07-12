import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import Media from "react-media"
import Tag from "../tag"
import scrollToBottom from "../../lib/scroll-to-bottom"
import theme from "../../theme"
import resume from "../../resume.json"

const Wrapper = styled.div`
  @media (min-width: ${theme.breakpoint}px) {
    display: flex;
    width: 100%;
  }
`

const Sidebar = styled.div`
  @media (min-width: ${theme.breakpoint}px) {
    min-width: 280px;
    max-width: 280px;
  }
`

const Body = styled.div`
  @media (min-width: ${theme.breakpoint}px) {
    padding-left: 25px;
    flex-grow: 1;
  }

  @media (max-width: ${theme.breakpoint - 1}px) {
    margin-bottom: 40px;
  }
`

const JobSection = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #c1c1c1;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
`

const SectionTitle = styled.h3`
  font-family: ${theme.titleFont};
  color: ${theme.highlightedTextColor};
`

const TechSection = styled.div`
  margin-bottom: 40px;
`

const JobDetails = styled.h4`
  font-size: 14px;
  margin-top: 7px;
`

const TechList = styled.div`
  margin-top: 15px;
`

const FreelancingInfo = styled.div`
  margin-top: 15px;
  font-size: 14px;
`

const MobileHeader = styled.div`
  font-size: 26px;
  font-family: ${theme.titleFont};
  font-weight: 500;
  color: ${theme.highlightedTextColor}
  margin-bottom: 30px;
`

const renderTech = (tech, index) => (
  <Tag key={index} small>
    {tech}
  </Tag>
)

const renderJob = (
  { position, company, period, description, techs },
  index
) => (
  <JobSection key={index}>
    <SectionTitle>{company}</SectionTitle>
    <JobDetails>{`${position} | ${period}`}</JobDetails>
    <p>{description}</p>
    <TechList>{techs.map(renderTech)}</TechList>
  </JobSection>
)

const renderFreelanceInfo = ({ renderSectionTitle = true } = {}) => (
  <TechSection>
    {renderSectionTitle && <SectionTitle>Freelancing Work</SectionTitle>}
    <FreelancingInfo>
      <p>
        <span>
          I also work as a freelancer and I've worked with many clients over the
          years. You can see some of these projects{" "}
        </span>
        <Link to="/work">here</Link>
        <span>.</span>
      </p>
      <p>
        <span>Get in </span>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={scrollToBottom}>
          touch
        </a>
        <span>
          {" "}
          if you think that I can help you with your project, I'm sure that I
          can!
        </span>
      </p>
    </FreelancingInfo>
  </TechSection>
)

const Resume = () => (
  <Media query={{ minWidth: theme.breakpoint }}>
    {(desktop) => (
      <Wrapper>
        <Sidebar>
          {!desktop && <MobileHeader>My Stack</MobileHeader>}
          <TechSection>
            <SectionTitle>I already work with</SectionTitle>
            <TechList>{resume.techs.workWith.map(renderTech)}</TechList>
          </TechSection>
          <TechSection>
            <SectionTitle>I would work with</SectionTitle>
            <TechList>{resume.techs.wouldWorkWith.map(renderTech)}</TechList>
          </TechSection>
          <TechSection>
            <SectionTitle>I don't want to work with</SectionTitle>
            <TechList>{resume.techs.wouldntWorkWith.map(renderTech)}</TechList>
          </TechSection>
          {desktop && renderFreelanceInfo()}
        </Sidebar>
        {!desktop && <MobileHeader>Job History</MobileHeader>}
        <Body>{resume.history.map(renderJob)}</Body>
        {!desktop && (
          <>
            <MobileHeader>Freelancing Work</MobileHeader>
            {renderFreelanceInfo({ renderSectionTitle: false })}
          </>
        )}
      </Wrapper>
    )}
  </Media>
)

export default Resume
