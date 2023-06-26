import styled from "styled-components";
import {ContainerStyled} from "../../App";

export const Portfolio = () => {
    return (
        <PortfolioStyled>
            <ContainerStyled>
                Portfolio block
            </ContainerStyled>
        </PortfolioStyled>
    )
}

const PortfolioStyled = styled.div`
  padding-top: 150px;
`