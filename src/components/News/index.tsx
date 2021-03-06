import {
  BigButton,
  BigNewsContainer,
  BoxImage,
  LitleButton,
  LitleImg,
  LitteShadows,
  LittleBox,
  LittleNews,
  LittleTitle,
  Myimage,
  NewsContainer,
  Shadow,
  Title,
} from './styled';
export function News() {
  return (
    <NewsContainer>
      <Shadow />
      <BigNewsContainer>
        <BigButton>Lorem</BigButton>
        <BoxImage>
          <Myimage
            src="/../public/new1.svg"
            width="761"
            height="380"
            alt="News"
          />
        </BoxImage>
        <Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </Title>
      </BigNewsContainer>
      <LittleNews>
        <LittleBox>
          <LitleButton>Lorem</LitleButton>
          <LitteShadows />
          <LitleImg>
            <Myimage
              src="/../public/new2.svg"
              width="338"
              height="165"
              alt="News"
            />
          </LitleImg>
          <LittleTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </LittleTitle>
        </LittleBox>
        <LittleBox>
          <LitleButton>Lorem</LitleButton>
          <LitteShadows />
          <LitleImg>
            <Myimage
              src="/../public/new3.svg"
              width="338"
              height="165"
              alt="News"
            />
          </LitleImg>
          <LittleTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
            tellus, malesuada et velit in, blandit molestie dolor.
          </LittleTitle>
        </LittleBox>
      </LittleNews>
    </NewsContainer>
  );
}
