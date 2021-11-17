import {
  BodyContainer,
  BoxNewsBody,
  ButtonLorem,
  ButtonRead,
  Data,
  ImgBox,
  ImgNext,
  NewsBox,
  Shadow,
  TextBox,
  TextSub,
  TextTitle,
} from './styled';

export function BodyComponent() {
  return (
    <BodyContainer>
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
          <TextTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</TextTitle>
          <TextSub>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</TextSub>
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
          <TextTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</TextTitle>
          <TextSub>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</TextSub>
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
          <TextTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</TextTitle>
          <TextSub>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</TextSub>
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
          <TextTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</TextTitle>
          <TextSub>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</TextSub>
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
          <TextTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</TextTitle>
          <TextSub>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</TextSub>
          <Data>00/00/0000</Data>
          <ButtonRead>Ler notícia</ButtonRead>
         </TextBox>
        </NewsBox>

      </BoxNewsBody>
    </BodyContainer>
  );
}
