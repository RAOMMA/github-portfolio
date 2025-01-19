import styled from "styled-components";

export const ServiceSection = styled.section`
  width: 100vw;
  padding: 2rem 5rem 5rem 5rem;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.primary.darker};
  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }
`;

export const SectionHeading = styled.p`
  width: 100%;
  text-align: center;
  margin: 2rem 0 4rem 0;
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
`;

export const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  @media (max-width: 930px) {
    grid-gap: 30px;
  }
  @media (max-width: 860px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 45px;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.primary.lighter};
  padding: 1.5rem 2rem;
  border-radius: 6px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary.main};
  transition: transform 0.4s ease;
  position: relative;
  &:hover:after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: -10px;
    z-index: -1;
    transform: scale(0.9);
    box-shadow: 0px 0px 8px 2px #000000;
    transition: transform 0.3s ease-out;
  }
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
  @media (max-width: 860px) {
    padding: 1.8rem 2.5rem;
  }
  @media (max-width: 600px) {
    padding: 1.6rem 2.2rem;
  }
  @media (max-width: 390px) {
    padding: 1.4rem 1.8rem;
  }
`;

export const Image = styled.img`
  width: 70px;
  height: auto;
  @media (max-width: 900px) {
    width: 50px;
  }
  @media (max-width: 860px) {
    width: 75px;
  }
`;

export const ServiceHeading = styled.p`
  font-size: 1.5rem;
  margin: 1.5rem 0 0.5rem 0;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  @media (max-width: 860px) {
    font-size: 1.2rem;
  }
`;
export const ServiceDetail = styled.p`
  text-align: center;
  margin: 1rem 0;
  line-height: 1.5rem;
  letter-spacing: 1px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary.lighter};
`;
