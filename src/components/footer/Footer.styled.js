import styled from 'styled-components'

export const FooterSection = styled.section`
  padding: 1.8rem 4rem;
  margin-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.colors.primary.light};
`
export const FooterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  alignitem: center;
`
export const FooterContent = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.primary.light};
`
