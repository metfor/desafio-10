import {
  BarrBlack,
  BarrPurple,
  BarText,
  Block,
  BodyContainer,
  BoxBarr,
  BoxBlock,
  BoxNewsBody,
  BoxNewsSideBar,
  BoxTextSide,
  ButtonLorem,
  ButtonLoremBig,
  ButtonRead,
  Data,
  ImgBox,
  ImgNext,
  NewsBox,
  Shadow,
  ShadowBig,
  SideBar,
  TextBox,
  TextSideBar,
  TextSub,
  TextTitle,
  Title,
} from './styled';

export function BodyComponent() {
  return (
    <BodyContainer>
      <BoxBlock>
        <BoxNewsBody>
          <NewsBox>
            <Shadow />
            <ButtonLorem>Lorem</ButtonLorem>
            <ImgBox>
              <ImgNext
                src="/../public/1.svg"
                width="200"
                height="151"
                alt="news1"
              />
            </ImgBox>
            <TextBox>
              <TextTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </TextTitle>
              <TextSub>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </TextSub>
              <Data>00/00/0000</Data>
              <ButtonRead>Ler notícia</ButtonRead>
            </TextBox>
          </NewsBox>
          <NewsBox>
            <Shadow />
            <ButtonLorem>Lorem</ButtonLorem>
            <ImgBox>
              <ImgNext
                src="/../public/2.svg"
                width="200"
                height="151"
                alt="news1"
              />
            </ImgBox>
            <TextBox>
              <TextTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </TextTitle>
              <TextSub>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </TextSub>
              <Data>00/00/0000</Data>
              <ButtonRead>Ler notícia</ButtonRead>
            </TextBox>
          </NewsBox>
          <NewsBox>
            <Shadow />
            <ButtonLorem>Lorem</ButtonLorem>
            <ImgBox>
              <ImgNext
                src="/../public/3.svg"
                width="200"
                height="151"
                alt="news1"
              />
            </ImgBox>
            <TextBox>
              <TextTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </TextTitle>
              <TextSub>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </TextSub>
              <Data>00/00/0000</Data>
              <ButtonRead>Ler notícia</ButtonRead>
            </TextBox>
          </NewsBox>
          <NewsBox>
            <Shadow />
            <ButtonLorem>Lorem</ButtonLorem>
            <ImgBox>
              <ImgNext
                src="/../public/4.svg"
                width="200"
                height="151"
                alt="news1"
              />
            </ImgBox>
            <TextBox>
              <TextTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </TextTitle>
              <TextSub>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </TextSub>
              <Data>00/00/0000</Data>
              <ButtonRead>Ler notícia</ButtonRead>
            </TextBox>
          </NewsBox>
          <NewsBox>
            <Shadow />
            <ButtonLorem>Lorem</ButtonLorem>
            <ImgBox>
              <ImgNext
                src="/../public/5.svg"
                width="200"
                height="151"
                alt="news1"
              />
            </ImgBox>
            <TextBox>
              <TextTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </TextTitle>
              <TextSub>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </TextSub>
              <Data>00/00/0000</Data>
              <ButtonRead>Ler notícia</ButtonRead>
            </TextBox>
          </NewsBox>
        </BoxNewsBody>
        <BoxBarr>
          <BarrBlack>
            <BarrPurple />
          </BarrBlack>
        </BoxBarr>
      </BoxBlock>
      <SideBar>
        <BoxTextSide>
          <Title>Lorem ipsum dolor</Title>
          <BarText />
        </BoxTextSide>
        <Block>
          <BoxNewsSideBar>
            <ImgBox>
              <ShadowBig />
              <TextSideBar>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </TextSideBar>
              <ButtonLoremBig>Lorem</ButtonLoremBig>
              <ImgNext
                src="/../public/sidebar1.svg"
                width="337"
                height="250"
                alt="news"
              />
            </ImgBox>
          </BoxNewsSideBar>
          <BoxNewsSideBar>
            <ShadowBig />
            <TextSideBar>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eros tellus, malesuada et velit in, blandit molestie dolor.
            </TextSideBar>
            <ButtonLoremBig>Lorem</ButtonLoremBig>
            <ImgBox>
              <ImgNext
                src="/../public/sidebar2.svg"
                width="337"
                height="250"
                alt="news"
              />
            </ImgBox>
          </BoxNewsSideBar>
          <BoxNewsSideBar>
            <ImgBox>
              <ShadowBig />
              <TextSideBar>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </TextSideBar>
              <ButtonLoremBig>Lorem</ButtonLoremBig>
              <ImgNext
                src="/../public/sidebar3.svg"
                width="337"
                height="250"
                alt="news"
              />
            </ImgBox>
          </BoxNewsSideBar>
        </Block>
      </SideBar>
    </BodyContainer>
  );
}
