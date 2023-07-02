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
                        <svg
                            width="60"
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 154.000000 135.000000"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g transform="translate(0.000000,135.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                <path
                                    d="M0 675 l0 -676 688 3 c674 3 688 3 727 24 87 45 118 135 119 344 0 156 -9 195 -60 273 l-24 37 24 38 c51 77 60 116 60 272 -1 159 -17 240 -59 296 -51 66 -20 64 -784 64 l-691 0 0 -675z m1104 342 c14 -10 18 -28 19 -75 0 -90 -3 -92 -149 -92 l-124 0 0 -170 0 -170 124 0 c146 0 149 -2 149 -92 -1 -47 -5 -65 -19 -75 -14 -10 -92 -13 -351 -13 l-333 0 0 350 0 350 333 0 c259 0 337 -3 351 -13z"
                                />
                            </g>
                        </svg>
                    </LogoStyled>

                    <MenuStyled activen={rwdActive ? 'true' : 'false'}>
                        <MenuItemStyled>Home</MenuItemStyled>
                        <MenuItemStyled>About</MenuItemStyled>
                        <MenuItemStyled>Technologies</MenuItemStyled>
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
  
  @media(max-width: 1400px) {
    padding: 10px 0;
  }
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

  @media(max-width: 1400px) {
    gap: 20px;
  }

  @media(max-width: 768px) {
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
  color: #fff;
  font-size: 15px;
  font-family: 'Oswald', sans-serif;

  @media (max-width: 768px) {
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
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