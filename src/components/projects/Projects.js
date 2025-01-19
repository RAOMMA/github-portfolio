import React from 'react'
import { useNavigate } from 'react-router-dom'

import ProjectCard from './ProjectCard'

import { ProjectSection, SectionHeading } from './Projects.styled'

import { ProjectsList } from '../../data/ProjectsList'

const Projects = () => {
  const navigate = useNavigate()
  return (
    <ProjectSection id="projects">
      <SectionHeading>Projects</SectionHeading>
      {ProjectsList.map(({ id, title, cover, description }, index) => {
        const btnAction =
          id === 'time-pay-jao' || id === 'emercient' ? null : () => navigate(`/${id}`)

        return (
          <ProjectCard
            key={id}
            projectName={title}
            projectImage={cover}
            projectDetail={description}
            reverse={index % 2 !== 0}
            btnAction={btnAction}
          />
        )
      })}
    </ProjectSection>
  )
}

export default Projects
