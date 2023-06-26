import styled from "styled-components";
import {
    ButtonBgItmStyled,
    ButtonBgStyled,
    ButtonBgTextStyled, ButtonBtmBorderStyled,
    ButtonStyled, ButtonTopBorderStyled,
    ContainerStyled,
    Text1Styled,
    Text2Styled,
    Text3Styled
} from "../../App";

export const TopBlock = () => {
    return (
        <TopBlockStyled>
            <ContainerStyled>
                <TopBlockContentStyled>
                    <TopBLockT1Styled>
                        <Text1Styled>Hello, My name is Bohdan Boberskyi, I can help you with:</Text1Styled>
                    </TopBLockT1Styled>
                    <TopBLockT2Styled>
                        <Text2Styled>BUILDING A WEBSITE / APPLICATION<br/> TO PROMOTE YOUR BUSINESS.</Text2Styled>
                    </TopBLockT2Styled>
                    <TopBLockT3Styled>
                        <Text3Styled>My mission is to help you create a high quality product.</Text3Styled>
                    </TopBLockT3Styled>
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

                <TopBlockBgStyled></TopBlockBgStyled>
            </ContainerStyled>
        </TopBlockStyled>
    )
}

const TopBlockStyled = styled.div`
  position: relative;
  padding-top: 250px;
  height: 100vh;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 100, .9);
`
const TopBLockT1Styled = styled.div`
  margin-bottom: 15px;
`
const TopBLockT2Styled = styled.div`
  margin-bottom: 40px;
`
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