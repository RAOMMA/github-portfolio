import styled from 'styled-components'

export const TechnologySection = styled.section`
  padding: 2rem 5rem;
  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
`
export const SectionHeading = styled.p`
  width: 100%;
  text-align: center;
  margin: 2rem 0 3rem 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary.lighter};
  letter-spacing: 1px;
  @media (max-width: 872px) {
    font-size: 2.5rem;
    margin-top: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const TechContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2rem;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.8rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 430px) {
    grid-gap: 1.3rem;
  }
`

export const TechContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`

export const TechCard = styled.div`
  background: ${({ theme }) => theme.colors.primary.darker};
  padding: 2rem 1rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  box-shadow: 0px 2px 5px 2px rgba(123, 124, 125, 0.4);
`

export const Image = styled.img`
  max-width: 60px;
  height: auto;
  @media (max-width: 1024px) {
    max-width: 55px;
  }
  @media (max-width: 872px) {
    max-width: 40px;
  }
  @media (max-width: 768px) {
    max-width: 50px;
  }
`

export const TechHeading = styled.p`
  font-size: 1rem;
  letter-spacing: 1px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.lighter};
  @media (max-width: 872px) {
    font-size: 0.9rem;
  }
`
