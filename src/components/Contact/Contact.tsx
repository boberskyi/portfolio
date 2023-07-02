import styled from "styled-components";
import {ContainerStyled} from "../../App";

export const Contact = () => {
    return (
        <ContactStyled>
            <ContainerStyled>
                <ContactContentStyled>
                    <ContactQuestionStyled>Got a Project? <br/> Let's work together</ContactQuestionStyled>
                    <ContactMailStyled>boberskyibohdan@gmail.com</ContactMailStyled>
                </ContactContentStyled>
            </ContainerStyled>
        </ContactStyled>
    )
}

const ContactStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background: #000;
`
const ContactContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`
const ContactQuestionStyled = styled.div`
  font-family: Oswald, sans-serif;
  font-size: 72px;
  line-height: 1.25;
  font-weight: 700;
  color: #fff;
  text-align: center;
`
const ContactMailStyled = styled.a`
  font-family: Oswald, sans-serif;
  font-size: 36px;
  color: #fff;
  text-align: center;
`