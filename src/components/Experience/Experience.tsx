import styled from "styled-components";
import {ContainerStyled} from "../../App";

export const Experience = () => {
    return (
        <ExperienceStyled>
            <ContainerStyled>
                <ExperienceContentStyled>

                    <ExperienceColumnStyled>
                        <ExperienceColumnH3Styled>2016 - 2016</ExperienceColumnH3Styled>
                        <ExperienceColumnTitleStyled>
                            Front-end developer (Intern) <br/>
                            <span>Ideo Sp. z o.o.</span>
                        </ExperienceColumnTitleStyled>
                        <ExperienceColumnDescriptStyled>
                            <li>
                                • Collaborated with senior developers to develop user interfaces for web
                                applications.
                            </li>
                            <li>
                                • Tested and debugged code using debugging tools and techniques.
                            </li>
                            <li>
                                • Assisted in the development and implementation of new website
                                features and functionality.
                            </li>
                            <li>
                                • Conducted website maintenance and updates to ensure the website was
                                running efficiently.
                            </li>
                            <li>
                                • Proficient in HTML, CSS, and JavaScript.
                            </li>
                            <li>
                                • Experienced in using jQuery, Bootstrap and WordPress.
                            </li>
                        </ExperienceColumnDescriptStyled>
                    </ExperienceColumnStyled>

                    <ExperienceColumnStyled>
                        <ExperienceColumnH3Styled>2016 - 2022</ExperienceColumnH3Styled>
                        <ExperienceColumnTitleStyled>
                            Frontend Developer<br/>
                            <span>Kiwi Media</span>
                        </ExperienceColumnTitleStyled>
                        <ExperienceColumnDescriptStyled>
                            <li>• Developed over 30 responsive and accessible websites using HTML, CSS,
                                JavaScript, jQuery, Git, and other front-end technologies.
                            </li>
                            <li>
                                • Integrated websites with content management systems (CMS) such
                                as WordPress and MODX, allowing clients to easily manage and update
                                their websites.
                            </li>
                            <li>
                                • Contributed to the implementation of web performance optimization
                                techniques, such as lazy loading, responsive web design, code minification
                                and image optimization.
                            </li>
                            <li>
                                • Used package managers like Yarn to manage and automate dependencies
                                for projects.
                            </li>
                            <li>
                                • Collaborated with the team to develop and maintain code standards,
                                best practices and perform code reviews.
                            </li>
                        </ExperienceColumnDescriptStyled>
                    </ExperienceColumnStyled>

                    <ExperienceColumnStyled>
                        <ExperienceColumnH3Styled>2020 - 2023</ExperienceColumnH3Styled>
                        <ExperienceColumnTitleStyled>
                            Frontend Developer<br/>
                            <span>Freelance</span>
                        </ExperienceColumnTitleStyled>
                        <ExperienceColumnDescriptStyled>
                            <li>
                                • Created responsive websites using HTML, CSS, and JavaScript, ensuring
                                that they functioned correctly on desktop and mobile devices.
                            </li>
                            <li>
                                • Collaborated with clients to gather requirements, provide updates,
                                and deliver projects on time and within budget.
                            </li>
                            <li>
                                • Received positive feedback from clients for creating high-quality
                                websites that met their business needs.
                            </li>
                        </ExperienceColumnDescriptStyled>
                    </ExperienceColumnStyled>

                </ExperienceContentStyled>
            </ContainerStyled>
        </ExperienceStyled>
    )
}

const ExperienceStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background: #07121e;
`
const ExperienceContentStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
`
const ExperienceColumnStyled = styled.div`
  max-width: 250px;
  min-width: 250px;
  width: 100%;
`
const ExperienceColumnH3Styled = styled.div`
  margin-bottom: 30px;
  color: #ff6c2c;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Oswald', sans-serif;
`
const ExperienceColumnTitleStyled = styled.div`
  font-size: 17px;
  font-weight: 700;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 20px;

  span {
    color: #ff6c2c;
  }
`
const ExperienceColumnDescriptStyled = styled.ul`
  font-size: 13px;
  margin-bottom: 30px;
  color: #fff;
  line-height: 1.6;
`