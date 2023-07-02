import styled from "styled-components";
import {
    BlockT1Styled, BlockT2Styled, BlockT3Styled,
    ButtonBgItmStyled,
    ButtonBgStyled,
    ButtonBgTextStyled, ButtonBtmBorderStyled,
    ButtonStyled, ButtonTopBorderStyled,
    ContainerStyled, SectionStyled,
    Text1Styled,
    Text2Styled,
    Text3Styled
} from "../../App";

export const TopBlock = () => {
    return (
        <SectionStyled bg="rgba(0, 0, 100, .9)">
            <ContainerStyled>
                <TopBlockContentStyled>
                    <BlockT1Styled>
                        <Text1Styled>Hello, My name is Bohdan Boberskyi, I can help you with:</Text1Styled>
                    </BlockT1Styled>
                    <BlockT2Styled>
                        <Text2Styled>BUILDING A WEBSITE / APPLICATION<br/> TO PROMOTE YOUR BUSINESS.</Text2Styled>
                    </BlockT2Styled>
                    <BlockT3Styled>
                        <Text3Styled>My mission is to help you create a high quality product.</Text3Styled>
                    </BlockT3Styled>
                    <TopBLockBtnStyled>
                        <ButtonStyled>
                            <ButtonTopBorderStyled></ButtonTopBorderStyled>
                            <ButtonBgStyled>
                                <ButtonBgTextStyled>CONTACT ME</ButtonBgTextStyled>
                                <ButtonBgItmStyled></ButtonBgItmStyled>
                            </ButtonBgStyled>
                            <ButtonBtmBorderStyled></ButtonBtmBorderStyled>
                        </ButtonStyled>
                    </TopBLockBtnStyled>
                </TopBlockContentStyled>

                {/*<TopBlockBgStyled></TopBlockBgStyled>*/}
            </ContainerStyled>
        </SectionStyled>
    )
}

const TopBLockT3Styled = styled.div`
  margin-bottom: 80px;
`
const TopBLockBtnStyled = styled.div`

`
const TopBlockContentStyled = styled.div`
  position: relative;
  z-index: 10;
`
const TopBlockBgStyled = styled.div`
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