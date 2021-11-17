import { Logo } from "../Header/styled";
import { FooterContainer, RightsText, TextBox } from "./styled";
export function FooterComponent(){
    return(
        <FooterContainer>
            <TextBox>
            <Logo>Naped</Logo>
            </TextBox>
            <RightsText>Todas as imagens de filmes, séries e etc são marcas registradas <br/>dos seus respectivos proprietários.</RightsText>
        </FooterContainer>
    )
}