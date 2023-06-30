import React from "react";
import {
    ButtonBgItmStyled,
    ButtonBgStyled, ButtonBgTextStyled, ButtonBtmBorderStyled,
    ButtonStyled,
    ButtonTopBorderStyled,
    ContainerStyled,
    Text1Styled,
    Text2Styled,
    Text3Styled
} from "../../App";
import styled from "styled-components";

export const About = () => {
    return (
        <AboutStyled>
            <ContainerStyled>
                <AboutContentStyled>
                    <AboutT1Styled>
                        <Text1Styled>Desire to Help Businesses Succeed</Text1Styled>
                    </AboutT1Styled>
                    <AboutT2Styled>
                        <Text2Styled>I HAVE A PASSION FOR <br/> BUILDING WEBSITES / APPS.</Text2Styled>
                    </AboutT2Styled>
                    <AboutT3Styled>
                        <Text3Styled>More than 6 Years of Web Development Experience.</Text3Styled>
                    </AboutT3Styled>
                    <AboutBtnStyled>
                        <ButtonStyled>
                            <ButtonTopBorderStyled></ButtonTopBorderStyled>
                            <ButtonBgStyled>
                                <ButtonBgTextStyled>CONTACT ME</ButtonBgTextStyled>
                                <ButtonBgItmStyled></ButtonBgItmStyled>
                            </ButtonBgStyled>
                            <ButtonBtmBorderStyled></ButtonBtmBorderStyled>
                        </ButtonStyled>
                    </AboutBtnStyled>

                    {/*<AboutBlockBgStyled></AboutBlockBgStyled>*/}
                </AboutContentStyled>
            </ContainerStyled>
        </AboutStyled>
    )
}

const AboutStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background: rebeccapurple;
  position: relative;
  z-index: 10;
`
const AboutContentStyled = styled.div`
  
`
const AboutT1Styled = styled.div`
  margin-bottom: 15px;
`
const AboutT2Styled = styled.div`
  margin-bottom: 40px;
`
const AboutT3Styled = styled.div`
  margin-bottom: 80px;
`
const AboutBtnStyled = styled.div`
  
`
const AboutBlockBgStyled = styled.div`
  position: absolute;
  z-index: 9;
  right: -25%;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(https://via.placeholder.com/1200x1000);
  will-change: transform;
  transform: translate3d(0em, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;

  opacity: .5;
`
