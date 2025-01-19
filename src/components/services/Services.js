import React from "react";
import {
  CardSection,
  Image,
  SectionHeading,
  ServiceCard,
  ServiceDetail,
  ServiceHeading,
  ServiceSection,
} from "./Services.styled";

import FrontendImage from "../../asset/icons/frontend.png";
import BackendImage from "../../asset/icons/backend.png";
import BugImage from "../../asset/icons/bug.png";

const Services = () => {
  return (
    <ServiceSection id="services">
      <SectionHeading>My Services</SectionHeading>
      <CardSection>
        <ServiceCard data-aos="fade-up" data-aos-duration="1200">
          <Image src={FrontendImage} alt="icon" />
          <ServiceHeading>Frontend</ServiceHeading>
          <ServiceDetail>
            I create visually appealing and responsive user interfaces. My expertise includes
            building dynamic applications ensuring smooth user experiences across all devices.
          </ServiceDetail>
        </ServiceCard>
        <ServiceCard data-aos="fade-up" data-aos-duration="1300">
          <Image src={BackendImage} alt="icon" />
          <ServiceHeading>Backend</ServiceHeading>
          <ServiceDetail>
            I design and implement robust server-side applications. My expertise includes developing
            APIs and managing data to ensure seamless integration and efficient performance.
          </ServiceDetail>
        </ServiceCard>
        <ServiceCard data-aos="fade-up" data-aos-duration="1400">
          <Image src={BugImage} alt="icon" />
          <ServiceHeading>Bug Fixing</ServiceHeading>
          <ServiceDetail>
            I identify and resolve issues to ensure application stability. My expertise includes
            using debugging tools to maintain high code quality and a smooth user experience.
          </ServiceDetail>
        </ServiceCard>
      </CardSection>
    </ServiceSection>
  )
};

export default Services;
