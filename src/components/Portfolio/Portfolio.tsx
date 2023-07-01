import styled from "styled-components";
import {ContainerStyled} from "../../App";

export const Portfolio = () => {
    return (
        <PortfolioStyled>
            <ContainerStyled>
                <PortfolioContentStyled>

                    <PortfolioSectionStyled>
                        <PortfolioSectionH3Styled><span>#</span> Websites</PortfolioSectionH3Styled>

                        <PortfolioWrapStyled>
                            <PortfolioItemStyled>
                                <PortfolioItemPreviewStyled></PortfolioItemPreviewStyled>
                                <PortfolioItemTitleStyled>Title 1</PortfolioItemTitleStyled>
                                <PortfolioItemTagsStyled>Tag 1, Tag 2, Tag 3</PortfolioItemTagsStyled>
                            </PortfolioItemStyled>

                            <PortfolioItemStyled>
                                <PortfolioItemPreviewStyled></PortfolioItemPreviewStyled>
                                <PortfolioItemTitleStyled>Title 2</PortfolioItemTitleStyled>
                                <PortfolioItemTagsStyled>Tag 1, Tag 2, Tag 3</PortfolioItemTagsStyled>
                            </PortfolioItemStyled>

                            <PortfolioItemStyled>
                                <PortfolioItemPreviewStyled></PortfolioItemPreviewStyled>
                                <PortfolioItemTitleStyled>Title 3</PortfolioItemTitleStyled>
                                <PortfolioItemTagsStyled>Tag 1, Tag 2, Tag 3</PortfolioItemTagsStyled>
                            </PortfolioItemStyled>

                            <PortfolioItemStyled>
                                <PortfolioItemPreviewStyled></PortfolioItemPreviewStyled>
                                <PortfolioItemTitleStyled>Title 4</PortfolioItemTitleStyled>
                                <PortfolioItemTagsStyled>Tag 1, Tag 2, Tag 3</PortfolioItemTagsStyled>
                            </PortfolioItemStyled>

                            <PortfolioItemStyled>
                                <PortfolioItemPreviewStyled></PortfolioItemPreviewStyled>
                                <PortfolioItemTitleStyled>Title 5</PortfolioItemTitleStyled>
                                <PortfolioItemTagsStyled>Tag 1, Tag 2, Tag 3</PortfolioItemTagsStyled>
                            </PortfolioItemStyled>
                        </PortfolioWrapStyled>

                    </PortfolioSectionStyled>

                    <PortfolioSectionStyled>
                        <PortfolioSectionH3Styled><span>#</span> Applications</PortfolioSectionH3Styled>

                        <PortfolioWrapStyled>
                            <PortfolioItemStyled>
                                <PortfolioItemPreviewStyled></PortfolioItemPreviewStyled>
                                <PortfolioItemTitleStyled>No project here yet</PortfolioItemTitleStyled>
                                <PortfolioItemTagsStyled>You can be first</PortfolioItemTagsStyled>
                            </PortfolioItemStyled>
                        </PortfolioWrapStyled>

                    </PortfolioSectionStyled>

                </PortfolioContentStyled>
            </ContainerStyled>
        </PortfolioStyled>
    )
}

const PortfolioStyled = styled.div`
  padding: 100px 0;
  background: #339979;
  display: flex;
  align-items: center;
`
const PortfolioContentStyled = styled.div`
  display: flex;
  flex-direction: column;
`
const PortfolioSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
`
const PortfolioSectionH3Styled = styled.div`
  margin-bottom: 70px;
  padding-bottom: 15px;
  border-bottom: 5px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: Oswald, sans-serif;
  font-size: 33px;
  font-weight: 700;
  text-transform: uppercase;

  span {
    color: #ff6c2c;
    font-size: 21px;
  }
`
const PortfolioItemStyled = styled.div`
  width: 100%;
  min-width: 30%;
  max-width: 30%;
`
const PortfolioItemPreviewStyled = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(https://placehold.co/350x250/EEE/31343C);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const PortfolioItemTitleStyled = styled.div`
  font-size: 15px;
  font-family: Oswald, sans-serif;
  color: #fff;
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: 700;
`
const PortfolioItemTagsStyled = styled.div`
  color: rgba(255,255,255,.6);
  font-size: 9px;
  font-family: Oswald, sans-serif;
`
const PortfolioWrapStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 100px;
`

