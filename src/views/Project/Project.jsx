import React, { useState, useEffect } from 'react'
import {
  Tag,
  Image,
  TechStacks,
  SubHeading,
  MainHeading,
  PageContainer,
  ImageContainer,
  ContentContainer,
  TechStackContainer,
  ContentDescription,
  MainHeadingContainer,
  PreviewButton,
} from './Project.styles'
import { useParams } from 'react-router-dom'

import { ProjectsDictionary } from '../../data/ProjectsDictionary'

const Project = () => {
  const { projectId = '' } = useParams()
  const [projectDetail, setProjectDetail] = useState(null)

  useEffect(() => {
    if (projectId) {
      const _detail = ProjectsDictionary[projectId] || null
      setProjectDetail(_detail)
    }
  }, [projectId])

  return (
    <>
      {projectDetail && (
        <PageContainer>
          <MainHeadingContainer data-aos="fade-up">
            <MainHeading>{projectDetail.title}</MainHeading>
          </MainHeadingContainer>

          <ContentContainer>
            <ContentDescription data-aos="fade-up" data-aos-duration={1100}>{projectDetail.description}</ContentDescription>

            <TechStackContainer data-aos="fade-up" data-aos-duration={1200}>
              <SubHeading>Technology</SubHeading>
              <TechStacks>
                {projectDetail.technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </TechStacks>
              
              {projectDetail.link && (
                <PreviewButton onClick={() => window.open(projectDetail.link, '_blank')}>
                  View Project
                </PreviewButton>
              )}
            </TechStackContainer>
          </ContentContainer>

          <ImageContainer>
            {projectDetail.images.map((image, index) => (
              <Image key={index} src={image} alt="crypto" data-aos="fade-up" data-aos-duration={1300}/>
            ))}
          </ImageContainer>
        </PageContainer>
      )}
    </>
  )
}

export default Project
