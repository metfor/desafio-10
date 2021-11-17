import { ActiveLink } from '../ActiviLink';
import { BoxLink, ButtonAcc, HeaderContainer, Logo, TextLink } from './styled';

export function Header() {
  return (
    <HeaderContainer>
      <Logo>Naped</Logo>
      <BoxLink>
        <ActiveLink href="/" activeClassName="active">
          <TextLink>Home</TextLink>
        </ActiveLink>
        <ActiveLink href="#" activeClassName="">
          <TextLink>Séries</TextLink>
        </ActiveLink>
        <ActiveLink href="/dads" activeClassName="">
          <TextLink>Filmes</TextLink>
        </ActiveLink>
        <ActiveLink href="/animes" activeClassName="active">
          <TextLink>Animes</TextLink>
        </ActiveLink>
        <ActiveLink href="/dads" activeClassName="">
          <TextLink>Games</TextLink>
        </ActiveLink>
        <ButtonAcc>Minha conta</ButtonAcc>
      </BoxLink>
    </HeaderContainer>
  );
}
