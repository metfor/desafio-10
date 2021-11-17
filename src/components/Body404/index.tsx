import { ActiveLink } from '../ActiviLink';
import { ImgNext } from '../BodyNewsPage/styled';
import {
  BodyContainer,
  Box1,
  Box2,
  ButtonHome,
  Text1,
  Text2,
  TextBox2,
} from './styled';
export function Body404() {
  return (
    <BodyContainer>
      <Box1>
        <Text1>
          Tenho más notícias <br />
          para você!
        </Text1>
        <Text2>
          A página que você está procurando pode ter sido <br />
          removida ou está temporariamente indisponível.
        </Text2>
        <ActiveLink activeClassName="" href="/">
          <ButtonHome>Voltar a Home</ButtonHome>
        </ActiveLink>
      </Box1>
      <Box2>
        <ImgNext src="/../public/404.svg" width="400" height="200" />
        <TextBox2>
          Ups! Você chegou no espaço... <br />
          volte para o mundo nerd!
        </TextBox2>
      </Box2>
    </BodyContainer>
  );
}
