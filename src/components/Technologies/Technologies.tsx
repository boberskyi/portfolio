import {ContainerStyled, SectionStyled} from "../../App";
import styled from "styled-components";
import modX from "../../modx.png";
import wp from "../../wp.png";
import html from "../../html.png";
import css from "../../css.png";
import js from "../../js.png";
import react from "../../react.png";
import stld from "../../styled.png";
import git from "../../git.png";
import ts from "../../ts.png";

export const Technologies = () => {
    return (
        <SectionStyled bg="rgb(200, 150, 200)">
            <ContainerStyled>
                <TechnologiesContentStyled>

                    <TechnologiesCardStyled>
                        <TechnologiesCardContentStyled>
                            <TechnologiesCardH3Styled>CMS</TechnologiesCardH3Styled>
                            <TechnologiesCardDescriptionStyled>
                                Developing and configuring websites using MODX and
                                WordPress for content and functionality management.
                            </TechnologiesCardDescriptionStyled>
                            <TechnologiesCardToolsTitleStyled>tools:</TechnologiesCardToolsTitleStyled>
                            <TechnologiesCardToolsBlockStyled>

                                <ToolsItmStyled>
                                    <ToolsItmWrapStyled>
                                        <img src={modX} alt="modX"/>
                                    </ToolsItmWrapStyled>
                                    <ToolsItmTitleStyled>modX</ToolsItmTitleStyled>
                                </ToolsItmStyled>

                                <ToolsItmStyled>
                                    <ToolsItmWrapStyled>
                                        <img src={wp} alt="wp"/>
                                    </ToolsItmWrapStyled>
                                    <ToolsItmTitleStyled>WordPress</ToolsItmTitleStyled>
                                </ToolsItmStyled>


                            </TechnologiesCardToolsBlockStyled>
                        </TechnologiesCardContentStyled>
                        <TechnologiesCardBottomStyled>
                            <TechnologiesCardBottomLeftStyled></TechnologiesCardBottomLeftStyled>
                            <TechnologiesCardBottomRightStyled></TechnologiesCardBottomRightStyled>
                        </TechnologiesCardBottomStyled>
                        <TechnologiesCardBottomLineStyled></TechnologiesCardBottomLineStyled>
                    </TechnologiesCardStyled>

                    <TechnologiesCardStyled>
                        <TechnologiesCardContentStyled>
                            <TechnologiesCardH3Styled>Web/App Development</TechnologiesCardH3Styled>
                            <TechnologiesCardDescriptionStyled>
                                Building user interfaces and implementing functionality
                                using HTML, CSS, JavaScript, React for web and app
                                development.
                            </TechnologiesCardDescriptionStyled>
                            <TechnologiesCardToolsTitleStyled>tools:</TechnologiesCardToolsTitleStyled>
                            <TechnologiesCardToolsBlockStyled>

                                <ToolsItmStyled>
                                    <ToolsItmWrapStyled>
                                        <img src={html} alt="html"/>
                                    </ToolsItmWrapStyled>
                                    <ToolsItmTitleStyled>HTML 5</ToolsItmTitleStyled>
                                </ToolsItmStyled>

                                <ToolsItmStyled>
                                    <ToolsItmWrapStyled>
                                        <img src={css} alt="css"/>
                                    </ToolsItmWrapStyled>
                                    <ToolsItmTitleStyled>CSS 3</ToolsItmTitleStyled>
                                </ToolsItmStyled>

                                <ToolsItmStyled>
                                    <ToolsItmWrapStyled>
                                        <img src={js} alt="js"/>
                                    </ToolsItmWrapStyled>
                                    <ToolsItmTitleStyled>JavaScript</ToolsItmTitleStyled>
                                </ToolsItmStyled>

                                <ToolsItmStyled>
                                    <ToolsItmWrapStyled>
                                        <img src={react} alt="js"/>
                                    </ToolsItmWrapStyled>
                                    <ToolsItmTitleStyled>ReactJS</ToolsItmTitleStyled>
                                </ToolsItmStyled>

                            </TechnologiesCardToolsBlockStyled>
                        </TechnologiesCardContentStyled>
                        <TechnologiesCardBottomStyled>
                            <TechnologiesCardBottomLeftStyled></TechnologiesCardBottomLeftStyled>
                            <TechnologiesCardBottomRightStyled></TechnologiesCardBottomRightStyled>
                        </TechnologiesCardBottomStyled>
                        <TechnologiesCardBottomLineStyled></TechnologiesCardBottomLineStyled>
                    </TechnologiesCardStyled>

                    <TechnologiesCardStyled>
                        <TechnologiesCardContentStyled>
                            <TechnologiesCardH3Styled>Tools and Libraries</TechnologiesCardH3Styled>
                            <TechnologiesCardDescriptionStyled>
                                Utilizing Git for version control, styled-components for
                                styling and TypeScript for type safety in web and app development.
                            </TechnologiesCardDescriptionStyled>
                            <TechnologiesCardToolsTitleStyled>tools:</TechnologiesCardToolsTitleStyled>
                            <TechnologiesCardToolsBlockStyled>

                                <ToolsItmStyled>
                                    <ToolsItmWrapStyled>
                                        <img src={git} alt="html"/>
                                    </ToolsItmWrapStyled>
                                    <ToolsItmTitleStyled>GIT</ToolsItmTitleStyled>
                                </ToolsItmStyled>

                                <ToolsItmStyled>
                                    <ToolsItmWrapStyled>
                                        <img src={stld} alt="styled-components"/>
                                    </ToolsItmWrapStyled>
                                    <ToolsItmTitleStyled>styled</ToolsItmTitleStyled>
                                </ToolsItmStyled>
                                <ToolsItmStyled>
                                    <ToolsItmWrapStyled>
                                        <img src={ts} alt="styled-components"/>
                                    </ToolsItmWrapStyled>
                                    <ToolsItmTitleStyled>TypeScript</ToolsItmTitleStyled>
                                </ToolsItmStyled>


                            </TechnologiesCardToolsBlockStyled>
                        </TechnologiesCardContentStyled>
                        <TechnologiesCardBottomStyled>
                            <TechnologiesCardBottomLeftStyled></TechnologiesCardBottomLeftStyled>
                            <TechnologiesCardBottomRightStyled></TechnologiesCardBottomRightStyled>
                        </TechnologiesCardBottomStyled>
                        <TechnologiesCardBottomLineStyled></TechnologiesCardBottomLineStyled>
                    </TechnologiesCardStyled>

                </TechnologiesContentStyled>
            </ContainerStyled>
        </SectionStyled>
    )
}


const TechnologiesContentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  
  @media(max-width: 1024px) {
    flex-direction: column;
  }
`
const TechnologiesCardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  min-width: 300px;
`
const TechnologiesCardContentStyled = styled.div`
  padding: 30px 30px 0 30px;
  border-top: 1.5px solid #fff;
  border-right: 1.5px solid #fff;
  border-left: 1.5px solid #fff;
`
const TechnologiesCardBottomStyled = styled.div`
  display: flex;
  width: 100%;
  height: 26px;
`
const TechnologiesCardBottomLineStyled = styled.div`
  background: #fff;
  height: 4.5px;
  width: 95px;
  will-change: transform;
  transform-style: preserve-3d;
`
const TechnologiesCardBottomLeftStyled = styled.div`
  width: calc(100% - 20px);
  height: 26px;
  border-left: 1.5px solid #fff;
  border-bottom: 1.5px solid #fff;
`
const TechnologiesCardBottomRightStyled = styled.div`
  width: 20px;
  height: 25px;
  border-left: 1.5px solid #fff;
  border-top: 1.5px solid #fff;
`
const TechnologiesCardH3Styled = styled.div`
  margin-bottom: 27px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
`
const TechnologiesCardDescriptionStyled = styled.div`
  font-size: 14px;
  color: #fff;
  line-height: 1.25;
`
const TechnologiesCardToolsTitleStyled = styled.div`
  margin-top: 35px;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
`
const TechnologiesCardToolsBlockStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
`
const ToolsItmStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ToolsItmWrapStyled = styled.div`
  width: 35px;
  height: 35px;
  padding: 4.5px;
  background: rgba(255,255,255,.6);
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 24px;
  }
`
const ToolsItmTitleStyled = styled.div`
  font-size: 8px;
  color: #fff;
`
