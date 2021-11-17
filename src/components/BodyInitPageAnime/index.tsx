import { ImgNext, TextSideBar } from '../Body/styled';
import {
  AnimeImg,
  AnimeList,
  BodyContainer,
  BoxFImg,
  Button,
  ButtonActive,
  ButtonDesactivated,
  MyInput,
  Pages,
  SearchBox,
  Shadow,
  Shadow2,
  TextSubPage,
  TextTitlePage,
} from './styled';
export function BodyInitPageAnime() {
  return (
    <BodyContainer>
      <BoxFImg>
        <Shadow />
        <TextTitlePage>Anime</TextTitlePage>
        <TextSubPage>
          O Naped pode ser sua fonte de informações sobre
          <br /> o mundo nerd e outros assuntos relacionados.
        </TextSubPage>
        <ImgNext src="/../public/capa-noticia.svg" width="1119" height="300" />
      </BoxFImg>
      <SearchBox>
        <MyInput placeholder="Quer ajuda na procura? Pesquise aqui" />
        <ImgNext src="/../public/search.svg" width="23.44" height="23.44" />
      </SearchBox>
      <AnimeList>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime1.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime2.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime3.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime1.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime2.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime3.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime1.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime2.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime3.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime1.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime2.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
        <AnimeImg>
          <Shadow2 />
          <TextSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </TextSideBar>
          <ImgNext
            src="/../public/anime3.svg"
            width="338"
            height="250"
            alt="Anime1"
          />
        </AnimeImg>
      </AnimeList>
      <Pages>
        <ButtonDesactivated>&lt;</ButtonDesactivated>
        <ButtonActive>1</ButtonActive>
        <Button>2</Button>
        <Button>...</Button>
        <Button>9</Button>
        <Button>10</Button>
        <Button>&gt;</Button>
      </Pages>
    </BodyContainer>
  );
}
