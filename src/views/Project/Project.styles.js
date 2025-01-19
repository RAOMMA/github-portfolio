import styled from 'styled-components'

export const PageContainer = styled.div`
  height: 100%;
  padding: 0 6rem;
  background-color: ${({ theme }) => theme.colors.primary.darker};
  @media (max-width: 900px) {
    padding: 0 3.5rem;
  }
     @media (max-width: 600px) {
    padding: 0 3rem;
  }
`
export const MainHeadingContainer = styled.div`
  width: min-content;
  padding: 1.5rem 1rem;
  border-radius: 0 0 5px 5px;
  background-color: ${({ theme }) => theme.colors.primary.main};
`
export const MainHeading = styled.p`
  font-size: 3rem;
  margin-top: 2rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary.darker};
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`
export const ContentContainer = styled.div`
  gap: 3rem;
  display: flex;
  margin: 3.5rem 0;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
export const ContentDescription = styled.p`
  width: 50%;
  color: white;
  letter-spacing: 1px;
  line-height: 1.5rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`
export const TechStackContainer = styled.div`
  width: 50%;
  padding: 1rem 0;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #7b7c7d;
  @media (max-width: 900px) {
    width: 100%;
  }
`
export const SubHeading = styled.h3`
  color: white;
`
export const TechStacks = styled.div`
  gap: 1rem;
  display: flex;
  margin: 1rem 0;
  align-items: center;
  flex-wrap: wrap;
`
export const Tag = styled.span`
  padding: 0.3rem;
  font-size: 0.8rem;
  border-radius: 5px;
  text-align: center;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary.dark};
  background-color: ${({ theme }) => theme.colors.primary.main};
`
export const PreviewButton = styled.button`
  margin: 2rem 0;
  font-weight: bold;
  color: white;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  outline: none;
  width: min-content;
  white-space: nowrap;
  font-size: 1rem;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    color: white;
    background: ${({ theme }) => theme.colors.primary.main};
  }
`
export const ImageContainer = styled.span`
  margin: 2rem 0;
`
export const Image = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`
