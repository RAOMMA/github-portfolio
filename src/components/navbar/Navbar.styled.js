import styled from "styled-components";

export const NavbarContainer = styled.header`
    background:${(props) => props.theme.colors.primary.dark};
    position: fixed;
    width:100vw;
    max-width:100%;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${(props) => (props.isStickey ? "1.4rem 5rem;" : "2rem 6rem;")}
    transition: top,left,padding.6s;
    z-index: 1000;
    @media (max-width: 768px) {
      padding: ${(props) => (props.isStickey ? "1.4rem 3rem;" : "1.8rem 4rem;")}
    }
    @media (max-width: 530px) {
      padding: ${(props) =>
        props.isStickey ? "1.4rem 2rem;" : "1.8rem 2.5rem;"}
    }
`;

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  @media (max-width: 500px) {
    gap: 0.8rem;
  }
`;

export const LogoText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  letter-spacing: 1px;
  font-family: "Nova Round", cursive;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const NavigationWrapper = styled.nav`
  background: ${(props) => props.theme.colors.primary.dark};
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    position: fixed;

    transform: ${({ showMenu }) =>
      showMenu ? "translateY(0%)" : "translateY(-110%)"};
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
    left: 0;
    top: 0;
    z-index: 100;
    background: ${(props) => props.theme.colors.primary.darker};
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  posistion: relative;
  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background: ${(props) => props.theme.colors.primary.dark};
    transform: ${({ showMenu }) =>
      showMenu ? "translateY(0%)" : "translateY(-110%)"};
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  }
`;

export const StyledLink = styled.a`
  padding: 0.6rem 0;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${(props) =>
    props.active
      ? props.theme.colors.primary.main
      : props.theme.colors.primary.light};
  text-decoration: none;
  position: relative;

  transition: opacity 0.3s ease-out;
  transition: width background 0.7s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${(props) => (props.active ? "100%" : "0%")};
    height: 2px;
    background: ${(props) => props.theme.colors.primary.main};
    transition: all 0.7s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary.main};
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: 768px) {
    opacity: ${({ showMenu }) => (showMenu ? "1" : "0")};
  }
`;

export const NavIcon = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 4rem;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: auto;
  @media (max-width: 872px) {
    width: 40px;
  }
  @media (max-width: 500px) {
    width: 30px;
  }
`;

export const TopBar = styled.div`
  width: 15px;
  height: 2px;
  background: ${(props) => props.theme.colors.primary.main};
  margin-bottom: 4px;
  transition: transform 0.2s ease;
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(1px) rotate(45deg)" : "rotate(0deg)"};
`;
export const MiddleBar = styled.div`
  width: 30px;
  height: 2px;
  margin-bottom: 4px;
  background: ${(props) => props.theme.colors.primary.main};
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(0px) rotate(-45deg)" : "rotate(0deg)"};
  transition: transform 0.2s ease;
`;
export const BottomBar = styled.div`
  width: 15px;
  height: 2px;
  background: ${(props) => props.theme.colors.primary.main};
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(-2px) rotate(45deg)" : "rotate(0deg)"};
  float: right;
  margin-bottom: 4px;
  transition: transform 0.2s ease;
`;
