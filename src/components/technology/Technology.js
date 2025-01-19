import React from 'react'

import {
  Image,
  TechCard,
  TechHeading,
  TechContent,
  TechContainer,
  SectionHeading,
  TechnologySection,
} from './Technology.styled'

import { skillsLogos } from '../../asset/skills'

const Technology = () => {
  return (
    <TechnologySection id="technology">
      <SectionHeading>Technologies</SectionHeading>
      <TechContainer>
        {skillsLogos.map(({ logo, title }) => (
          <TechCard key={title} data-aos="fade-down">
            <TechContent>
              <Image src={logo} alt={title} />
              <TechHeading>{title}</TechHeading>
            </TechContent>
          </TechCard>
        ))}
      </TechContainer>
    </TechnologySection>
  )
}

export default Technology
