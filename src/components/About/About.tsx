import React from "react";
import {ContainerStyled} from "../../App";
import styled from "styled-components";

export const About = () => {
    return (
        <AboutStyled>
            <ContainerStyled>
                About block
            </ContainerStyled>
        </AboutStyled>
    )
}

const AboutStyled = styled.div`
  padding-top: 150px;
`