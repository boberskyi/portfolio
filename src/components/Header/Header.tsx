import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {ContainerStyled} from "../../App";

export const Header = () => {
  const [rwdActive, setRwdActive] = useState<boolean>(false);
  const burgerOnClick = () => {
    setRwdActive(!rwdActive);
  }
  return (
    <HeaderStyled>
      <ContainerStyled>
        <MainNavStyled>

          <LogoStyled>
            <img src="https://via.placeholder.com/40x40" alt="Logo"/>
          </LogoStyled>

          <MenuStyled activen={rwdActive ? 'true' : 'false'}>
            <MenuItemStyled>Home</MenuItemStyled>
            <MenuItemStyled>About</MenuItemStyled>
            <MenuItemStyled>Service</MenuItemStyled>
            <MenuItemStyled>Experience</MenuItemStyled>
            <MenuItemStyled>Portfolio</MenuItemStyled>
            <MenuItemStyled>Calculator</MenuItemStyled>
            <MenuItemStyled>Contact</MenuItemStyled>
          </MenuStyled>

          <BurgerStyled activeb={rwdActive ? 'true' : 'false'}
                        onClick={burgerOnClick}
          >
            <div></div>
            <div></div>
            <div></div>
          </BurgerStyled>

        </MainNavStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  background: rgba(255, 20, 40, .3);
`
const MainNavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`
const LogoStyled = styled.a`
  cursor: pointer;
  position: relative;
  z-index: 50;
`
interface MenuStyledProps {
  activen: 'true' | 'false';
}
const MenuStyled = styled.nav<MenuStyledProps>`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: absolute;
    background: #000;
    width: 100%;
    left: 150%;
    top: 0;
    z-index: 40;
    align-items: center;
    justify-content: center;
    
    transition: .2s ease-in-out all;
    
    ${({activen}) =>
            activen === 'true' &&
            css`
              left: 0;
            `}
    
  }
`
const MenuItemStyled = styled.a`
  cursor: pointer;
  
  @media(max-width: 768px) {
    color: #fff;
    width: 100%;
    text-align: center;
  }
`

interface BurgerStyledProps {
  activeb: 'true' | 'false';
}

const BurgerStyled = styled.div<BurgerStyledProps>`
  cursor: pointer;
  display: none;
  position: relative;
  z-index: 50;

  & div:first-of-type {
    width: 21px;
    height: 3px;
    margin-bottom: 5px;
    padding-right: 0;
    padding-bottom: 0;
    border-radius: 5px;
    background-color: #fff;
    -webkit-perspective-origin: 100% 0%;
    perspective-origin: 100% 0%;
    -webkit-transform-origin: 100% 0%;
    -ms-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    transition: .2s ease all;

    ${({activeb}) =>
            activeb === 'true' &&
            css`
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
              width: 24px;
            `}
  }

  & div:nth-of-type(2) {
    opacity: 1;
    width: 16px;
    height: 3px;
    margin-bottom: 5px;
    padding-right: 0;
    padding-bottom: 0;
    border-radius: 5px;
    background-color: #fff;
    transition: .2s ease all;

    ${({activeb}) =>
            activeb === 'true' &&
            css`
              opacity: 0;
            `}
  }

  & div:last-of-type {
    width: 21px;
    height: 3px;
    padding-right: 0;
    padding-bottom: 0;
    border-radius: 5px;
    background-color: #fff;
    -webkit-perspective-origin: 100% 100%;
    perspective-origin: 100% 100%;
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    transition: .2s ease all;

    ${({activeb}) =>
            activeb === 'true' &&
            css`
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
              width: 24px;
            `}
  }

  @media (max-width: 768px) {
    display: block;
    width: 21px;
    height: 19px;
    position: relative;
  }
`