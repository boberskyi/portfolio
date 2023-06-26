import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {About} from "./components/About/About";
import {TopBlock} from "./components/TopBlock/TopBlock";
import {Technologies} from "./components/Technologies/Technologies";
import {Experience} from "./components/Experience/Experience";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Calculator} from "./components/Calculator/Calculator";
import {Contact} from "./components/Contact/Contact";
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Header/>
            <TopBlock/>
            <About/>
            <Technologies/>
            <Experience/>
            <Portfolio/>
            <Calculator/>
            <Contact/>
        </div>
    );
}

export default App;

export const ContainerStyled = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`

export const Text1Styled = styled.p`
  font-family: Oswald,sans-serif;
  color: #ff6c2c;
  font-size: 28px;
  line-height: 1;
  font-weight: 500;
`
export const Text2Styled = styled.h2`
  font-family: Oswald,sans-serif;
  font-size: 72px;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
`
export const Text3Styled = styled.p`
  font-family: Oswald,sans-serif;
  color: rgba(255,255,255,.8);
  font-size: 24px;
  line-height: 1.25;
  font-weight: 300;
`
export const ButtonStyled = styled.a`
  position: relative;
  z-index: 99;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 240px;
  height: 80px;
  padding: 5px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #06111d;
  font-weight: 700;
  text-decoration: none;
  text-transform: none;
`
export const ButtonBgStyled = styled.div`
  -webkit-clip-path: polygon(0% 0, 100% 0, 100% 91%, 98% 100%, 0 100%);
  clip-path: polygon(0% 0, 100% 0, 100% 91%, 98% 100%, 0 100%);
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 80px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
`
export const ButtonBgTextStyled = styled.div`
  color: rgb(6, 17, 29);
  font-size: 24px;
  font-family: Oswald,sans-serif;
`
export const ButtonBgItmStyled = styled.div`
  position: absolute;
  z-index: -1;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #ff6c2c;
  -webkit-transition: opacity .5s;
  transition: opacity .5s;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`
export const ButtonTopBorderStyled = styled.div`
  position: absolute;
  left: 0;
  top: -6px;
  width: 100%;
  height: 35px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-top: 1px solid hsla(0,0%,100%,.5);
  border-right: 1px solid hsla(0,0%,100%,.5);
  border-left: 1px solid hsla(0,0%,100%,.5);
`
export const ButtonBtmBorderStyled = styled.div`
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 35px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-right: 1px solid hsla(0,0%,100%,.5);
  border-bottom: 1px solid hsla(0,0%,100%,.5);
  border-left: 1px solid hsla(0,0%,100%,.5);
`