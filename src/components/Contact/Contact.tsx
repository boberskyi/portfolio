import styled from "styled-components";
import {ContainerStyled, SectionStyled} from "../../App";

export const Contact = () => {
    return (
        <SectionStyled bg="#000">
            <ContainerStyled>
                <ContactContentStyled>
                    <ContactQuestionStyled>Got a Project? <br/> Let's work together</ContactQuestionStyled>
                    <ContactMailStyled>boberskyibohdan@gmail.com</ContactMailStyled>
                </ContactContentStyled>
            </ContainerStyled>
        </SectionStyled>
    )
}

const ContactContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  
  @media(max-width: 768px) {
    gap: 30px;
  }
`
const ContactQuestionStyled = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 72px;
  line-height: 1.25;
  font-weight: 700;
  color: #fff;
  text-align: center;

  @media(max-width: 768px) {
    font-size: 40px;
  }
`
const ContactMailStyled = styled.a`
  font-family: 'Oswald', sans-serif;
  font-size: 36px;
  color: #fff;
  text-align: center;

  @media(max-width: 768px) {
    font-size: 20px;
  }
`