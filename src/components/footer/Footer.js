import React from 'react'
import { FaRegCopyright } from 'react-icons/fa6'
import { FooterContent, FooterContainer, FooterSection } from './Footer.styled'

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FaRegCopyright color="#7b7c7d" />
        <FooterContent>
          2021. Made with love & passion by Mudassir Waheed
        </FooterContent>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer
