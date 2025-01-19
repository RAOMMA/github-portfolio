//react
import React from "react";
//styled
import {
  ContentSection,
  IntroSection,
  HeroContainer,
  PhotoContainer,
  Slogan,
  DeveloperName,
  Intro,
  Typo,
  HeroButton,
  PhotoBackground,
  SocialLinkContainer,
  Partition,
  SocialLink,
  Circle,
  IntroContentSection,
  PhotoFrame,
  TextContainer,
  Line,
  ProfilePhoto,
} from "./Banner.styled";
import profileImg from "../../asset/Mudassir-01.png"

const Banner = () => {

  const handleSendEmail = () => {
    window.location.href = 'mailto:mudassirwaheed@sensviz.com'
  }

  return (
    <HeroContainer id="home">
      <ContentSection>
        <IntroSection data-aos="fade-right" data-aos-duration="1400">
          <SocialLinkContainer>
            <Partition></Partition>
            <SocialLink href="https://github.com/Mudassir742" target="_blank">
              Github
            </SocialLink>
            <Circle></Circle>
            <SocialLink
              href="https://www.linkedin.com/in/mudassir-waheed-69b005206/"
              target="_blank"
            >
              LinkedIn
            </SocialLink>
            <Partition></Partition>
          </SocialLinkContainer>
          <IntroContentSection>
            <Intro>Mudassir Waheed.</Intro>
            <TextContainer>
              <Line></Line>
              <Typo>WEB DEVELOPER</Typo>
            </TextContainer>
            <Slogan>Where imagination meets creativity.</Slogan>
            <HeroButton onClick={()=>handleSendEmail()}>Let's Talk</HeroButton>
          </IntroContentSection>
        </IntroSection> 
        <PhotoContainer data-aos="fade-left" data-aos-duration="1500">
          <PhotoFrame>
            <PhotoBackground>
              <ProfilePhoto src={profileImg} alt="mudassir's profile" />
            </PhotoBackground>
          </PhotoFrame>
          {/* <QouteCard className="qoute">
            "make it Simple, make it Right, make it Work."
          </QouteCard> */}
        </PhotoContainer>
      </ContentSection>
      <DeveloperName>Mudassir Waheed.</DeveloperName>
    </HeroContainer>
  )
};

export default Banner;
