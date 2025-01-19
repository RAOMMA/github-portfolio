import React from "react";
import { Parallax } from "react-scroll-parallax";
import {
  ProjectContainer,
  Image,
  ProjectHeading,
  ProjectImageContainer,
  ProjectInfoContainer,
  ProjectButton,
  ProjectDetail,
} from "./Projects.styled";

const ProjectCard = ({ projectImage, projectName, projectDetail,btnAction,reverse }) => {
  return (
    <ProjectContainer reverse={reverse}>
      <ProjectImageContainer>
        <Parallax speed={-25}>
          <Image src={projectImage} alt="project1" />
        </Parallax>
      </ProjectImageContainer>
      <ProjectInfoContainer>
        <ProjectHeading>{projectName}</ProjectHeading>
        <ProjectDetail>{projectDetail}</ProjectDetail>
        {btnAction ? (
          <ProjectButton onClick={() => btnAction()}>View Project</ProjectButton>
        ) : (
          <ProjectDetail>Adding Soon!</ProjectDetail>
        )}
      </ProjectInfoContainer>
    </ProjectContainer>
  )
};

export default ProjectCard;
