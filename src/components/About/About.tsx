import React from "react";
import {
    BlockT1Styled, BlockT2Styled, BlockT3Styled,
    ButtonBgItmStyled,
    ButtonBgStyled, ButtonBgTextStyled, ButtonBtmBorderStyled,
    ButtonStyled,
    ButtonTopBorderStyled,
    ContainerStyled, SectionStyled,
    Text1Styled,
    Text2Styled,
    Text3Styled
} from "../../App";
import styled from "styled-components";

export const About = () => {
    return (
        <SectionStyled bg="rebeccapurple">
            <ContainerStyled>
                <AboutContentStyled>
                    <BlockT1Styled>
                        <Text1Styled>Desire to Help Businesses Succeed</Text1Styled>
                    </BlockT1Styled>
                    <BlockT2Styled>
                        <Text2Styled>I HAVE A PASSION FOR <br/> BUILDING WEBSITES / APPS.</Text2Styled>
                    </BlockT2Styled>
                    <BlockT3Styled>
                        <Text3Styled>More than 6 Years of Web Development Experience.</Text3Styled>
                    </BlockT3Styled>
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
        </SectionStyled>
    )
}

const AboutContentStyled = styled.div`
  
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
