import {
  BigText,
  BodyContainer,
  BoxImage,
  ButtonLorem,
  Date,
  ImgNext,
  SubTitle,
  Title,
} from './styled';

export function BodyNewsPage() {
  return (
    <BodyContainer>
      <Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
        <br /> mattis neque sed odio.
      </Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SubTitle>
      <Date>00 de Julho de 2021</Date>
      <BoxImage>
        <ButtonLorem>Lorem</ButtonLorem>
        <ImgNext src="/../public/img.svg" width="1119" height="450" alt="img" />
      </BoxImage>
      <BigText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
        mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
        odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
        ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
        pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
        dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
        gravida sagittis. Ut eleifend ornare leo et auctor.
      </BigText>
      <BigText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
        mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
        odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
        ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
        pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
        dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
        gravida sagittis. Ut eleifend ornare leo et auctor.
      </BigText>
      <ImgNext src="/../public/img2.svg" width="1119" height="450" alt="img" />
      <BigText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
        mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
        odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
        ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
        pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
        dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
        gravida sagittis. Ut eleifend ornare leo et auctor.
      </BigText>
    </BodyContainer>
  );
}
