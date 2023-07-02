import styled from "styled-components";
import {ContainerStyled} from "../../App";

export const Contact = () => {
    return (
        <ContactStyled>
            <ContainerStyled>
                <ContactContentStyled></ContactContentStyled>
            </ContainerStyled>
        </ContactStyled>
    )
}

const ContactStyled = styled.div`
  padding-top: 150px;
`
const ContactContentStyled = styled.div`
  
`
