import styled from "styled-components";
import {
    ButtonBgItmStyled,
    ButtonBgStyled,
    ButtonBgTextStyled,
    ButtonBtmBorderStyled, ButtonStyled,
    ButtonTopBorderStyled,
    ContainerStyled
} from "../../App";
import landing_img from "../../landing.jpg";
import multipage_img from "../../multipage.jpg";
import blog_img from "../../blog.jpg";
import ecom_img from "../../ecom.jpg";
import socialnetwork_img from "../../socialnetwork.jpg";
import app_img from "../../app.jpg";

export const Calculator = () => {
    return (
        <CalculatorStyled>
            <ContainerStyled>
                <CalculatorContentStyled>
                    <CalculatorTitleStyled>PROJECT COST & TIME CALCULATOR</CalculatorTitleStyled>
                    <CalculatorWrapStyled>
                        <CalculatorLeftStyled>

                            <CalculatorInnerStyled>
                                <CalculatorInnerH3Styled>Main information</CalculatorInnerH3Styled>

                                <CalculatorQuestionBlockStyled>
                                    <CalculatorQuestionStyled>
                                        <CalculatorQuestionTextStyled>Do you have current
                                            Website?</CalculatorQuestionTextStyled>
                                        <input type="checkbox"/>
                                    </CalculatorQuestionStyled>

                                    <CalculatorQuestionStyled>
                                        <CalculatorQuestionTextStyled>Do you have a Branding style
                                            guide?</CalculatorQuestionTextStyled>
                                        <input type="checkbox"/>
                                    </CalculatorQuestionStyled>

                                    <CalculatorQuestionStyled>
                                        <CalculatorQuestionTextStyled>Do you have copy
                                            writing?</CalculatorQuestionTextStyled>
                                        <input type="checkbox"/>
                                    </CalculatorQuestionStyled>

                                    <CalculatorQuestionStyled>
                                        <CalculatorQuestionTextStyled>Do you have the
                                            Design?</CalculatorQuestionTextStyled>
                                        <input type="checkbox"/>
                                    </CalculatorQuestionStyled>
                                </CalculatorQuestionBlockStyled>
                            </CalculatorInnerStyled>

                            <CalculatorInnerStyled>
                                <CalculatorInnerH3Styled>WEBSITE COMPLEXITY</CalculatorInnerH3Styled>
                                <CalculatorTypesStyle>
                                    <CalculatorTypeItmStyle active={true}>
                                        <CalculatorTypeImgStyle src={landing_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Landing page / Single page</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={multipage_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Multi-page info Website</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={blog_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>News Website / Blog</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={ecom_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>E-Commerce Website</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={socialnetwork_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Social Network</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={app_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Web Platform / Web app</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                </CalculatorTypesStyle>
                            </CalculatorInnerStyled>

                            <CalculatorInnerStyled>
                                <CalculatorInnerHalfStyled>
                                    <CalculatorInnerLeftStyled>
                                        <CalculatorInnerH3Styled>QUALITY RATE</CalculatorInnerH3Styled>
                                        <CalculatorRangeWrapStyled>
                                            <CalculatorRangeOptionsStyled>
                                                <CalculatorRangeOptionStyled>Standard</CalculatorRangeOptionStyled>
                                                <CalculatorRangeOptionStyled>Good</CalculatorRangeOptionStyled>
                                                <CalculatorRangeOptionStyled>Amazing</CalculatorRangeOptionStyled>
                                            </CalculatorRangeOptionsStyled>
                                            <CalculatorRangeStyled type="range" name="volume" min="0" max="2"
                                                                   defaultValue="0"/>
                                        </CalculatorRangeWrapStyled>
                                    </CalculatorInnerLeftStyled>
                                    <CalculatorInnerRightStyled>
                                        <CalculatorInnerH3Styled>SPEED RATE</CalculatorInnerH3Styled>
                                        <CalculatorRangeWrapStyled>
                                            <CalculatorRangeOptionsStyled>
                                                <CalculatorRangeOptionStyled>Standard</CalculatorRangeOptionStyled>
                                                <CalculatorRangeOptionStyled>Fast</CalculatorRangeOptionStyled>
                                                <CalculatorRangeOptionStyled>Fastest</CalculatorRangeOptionStyled>
                                            </CalculatorRangeOptionsStyled>
                                            <CalculatorRangeStyled type="range" name="volume" min="0" max="2"
                                                                   defaultValue="0"/>
                                        </CalculatorRangeWrapStyled>
                                    </CalculatorInnerRightStyled>
                                </CalculatorInnerHalfStyled>
                            </CalculatorInnerStyled>

                            <CalculatorInnerStyled>
                                <CalculatorInnerH3Styled>Extra components</CalculatorInnerH3Styled>
                                <CalculatorTypesStyle>
                                    <CalculatorTypeItmStyle active={true}>
                                        <CalculatorTypeImgStyle src={landing_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Additional Page</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={multipage_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>The blog</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={blog_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Analitics</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={ecom_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Funel Plugins</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={socialnetwork_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Custom Plugins</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={app_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Interactions / Animations</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={app_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Custom Art / Illustrations</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={app_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Calculator</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={app_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Payment System</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={app_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>Membership System</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                    <CalculatorTypeItmStyle active={false}>
                                        <CalculatorTypeImgStyle src={app_img}></CalculatorTypeImgStyle>
                                        <CalculatorTypeTxtStyle>User / Admin dashboard</CalculatorTypeTxtStyle>
                                    </CalculatorTypeItmStyle>
                                </CalculatorTypesStyle>
                            </CalculatorInnerStyled>

                            <CalculatorInnerStyled>
                                <CalculatorInnerH3Styled>Contact information</CalculatorInnerH3Styled>
                                <CalculatorFormStyled>
                                    <CalculatorFormInputStyled type="text" placeholder="NAME*" required/>
                                    <CalculatorFormInputStyled type="email" placeholder="E-MAIL*" required/>
                                    <CalculatorFormInputStyled type="tel" placeholder="PHONE"/>
                                </CalculatorFormStyled>
                            </CalculatorInnerStyled>
                        </CalculatorLeftStyled>

                        <CalculatorRightStyled>
                            <CalculatorInnerStyled>
                                <CalculatorResultStyled>
                                    <CalculatorResultWrapperStyled>
                                        <CalculatorResultH3Styled>CALCULATED ESTIMATION</CalculatorResultH3Styled>
                                        <CalculatorResultDscrStyled>
                                            Cost and time can vary, this is approximate time and cost estimation.
                                        </CalculatorResultDscrStyled>
                                        <CalculatorResultItmStyled>
                                            <CalculatorResultItmTitleStyled>Cost:</CalculatorResultItmTitleStyled>
                                            <CalculatorResultItmInputStyled value="1200 $" readOnly></CalculatorResultItmInputStyled>
                                        </CalculatorResultItmStyled>
                                        <CalculatorResultItmStyled>
                                            <CalculatorResultItmTitleStyled>Time / Days:</CalculatorResultItmTitleStyled>
                                            <CalculatorResultItmInputStyled value="7" readOnly></CalculatorResultItmInputStyled>
                                        </CalculatorResultItmStyled>

                                        <ButtonStyled>
                                            <ButtonTopBorderStyled></ButtonTopBorderStyled>
                                            <ButtonBgStyled>
                                                <ButtonBgTextStyled>HIRE ME</ButtonBgTextStyled>
                                                <ButtonBgItmStyled></ButtonBgItmStyled>
                                            </ButtonBgStyled>
                                            <ButtonBtmBorderStyled></ButtonBtmBorderStyled>
                                        </ButtonStyled>
                                    </CalculatorResultWrapperStyled>
                                </CalculatorResultStyled>
                            </CalculatorInnerStyled>
                        </CalculatorRightStyled>
                    </CalculatorWrapStyled>
                </CalculatorContentStyled>
            </ContainerStyled>
        </CalculatorStyled>
    )
}

const CalculatorStyled = styled.div`
  padding: 150px 0;
  background: #07121e;
`
const CalculatorContentStyled = styled.div`
  display: flex;
  flex-direction: column;
`
const CalculatorTitleStyled = styled.div`
  padding-bottom: 30px;
  margin-bottom: 50px;
  border-bottom: 5px solid #fff;
  font-size: 54px;
  color: #fff;
  font-weight: 700;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
`
const CalculatorWrapStyled = styled.div`
  display: flex;
  gap: 30px;
`
const CalculatorLeftStyled = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const CalculatorRightStyled = styled.div`
  width: 35%;
`
const CalculatorInnerStyled = styled.div`
  background: rgba(255, 255, 255, .2);
  padding: 60px 50px;
`
const CalculatorInnerH3Styled = styled.div`
  position: relative;
  color: #fff;
  padding-bottom: 5px;
  font-size: 23px;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;

  &:before {
    width: 43px;
    height: 1px;
    background: #fff;
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
  }
`
const CalculatorQuestionStyled = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`
const CalculatorQuestionTextStyled = styled.label`
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  color: #fff;
`
const CalculatorQuestionBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const CalculatorTypesStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

interface CalculatorTypeItmProps {
    active: boolean
}

const CalculatorTypeItmStyle = styled.label<CalculatorTypeItmProps>`
  width: 160px;
  height: 160px;
  padding: 5px;
  border: ${props => (props.active ? '1px solid #ff6c2c' : 'none')};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

interface CalculatorTypeImgStyleProps {
    src: string;
}

const CalculatorTypeImgStyle = styled.div<CalculatorTypeImgStyleProps>`
  margin-bottom: 5px;
  width: 120px;
  height: 120px;
  background-color: #fff;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.src});
`
const CalculatorTypeTxtStyle = styled.div`
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-size: 10px;
`
const CalculatorInnerHalfStyled = styled.div`
  display: flex;
  gap: 60px;
`
const CalculatorInnerLeftStyled = styled.div`
  width: 100%;
`
const CalculatorInnerRightStyled = styled.div`
  width: 100%;
`
const CalculatorRangeWrapStyled = styled.div`

`
const CalculatorRangeOptionsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 20px;
`
const CalculatorRangeOptionStyled = styled.div`
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-size: 10px;
`
const CalculatorRangeStyled = styled.input`
  width: 100%;
`
const CalculatorFormStyled = styled.form`
  display: flex;
  gap: 20px;
`
const CalculatorFormInputStyled = styled.input`
  padding: 10px;
  border: 1px solid transparent;
  width: 100%;
  font-size: 14px;
  color: #fff;
  background: rgba(217, 217, 217, .1);
  font-family: 'Oswald', sans-serif;
`
const CalculatorResultStyled = styled.div`
  position: relative;
`
const CalculatorResultWrapperStyled = styled.div`
  color: #000;
  background-color: #fff;
  border: 2px solid #8b8b8b;
  padding: 28px 23px;
`
const CalculatorResultH3Styled = styled.div`
  margin-bottom: 10px;
  font-family: 'Oswald', sans-serif;
  font-size: 23px;
  font-weight: 700;
`
const CalculatorResultDscrStyled = styled.div`
  font-size: 13px;
  margin-bottom: 35px;
`
const CalculatorResultItmStyled = styled.div`
  margin-bottom: 20px;
`
const CalculatorResultItmTitleStyled = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
  font-family: 'Oswald', sans-serif;
`
const CalculatorResultItmInputStyled = styled.input`
  background-color: rgb(30,40,51);
  border-color: #000;
  color: #fff;
  font-size: 27px;
  font-weight: 700;
  width: 100%;
  padding: 10px 20px;
  font-family: 'Oswald', sans-serif;
`