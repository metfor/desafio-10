import styled from 'styled-components';
import image from 'next/image';
export const RecentNewsContainer = styled.div`
  margin-top: 120px;
  margin-left: 29.5%;
  margin-right: 29.5%;
  @media (max-width: 2510px) {
    margin-left: 25%;
    margin-right: 25%;
  }
  @media (max-width: 2100px) {
    margin-left: 15%;
    margin-right: 15%;
  }
  @media (max-width: 1600px) {
    margin-left: 7%;
    margin-right: 7%;
  }
  display: grid;
`;
export const Title = styled.text`
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 24px;
  line-height: 20px;
  color: #fefbfb;
`;
export const BarrPurple = styled.div`
  width: 250px;
  height: 3px;
  background: #8257e6;
  margin-top: 10px;
`;
export const BoxRecentNews = styled.div`
  display: grid;
  grid-template-columns: 338px 338px 338px;
  grid-column-gap: 52px;
  margin-top: 39px;
  grid-row-gap: 52px;
`;
export const BoxImg = styled.div``;
export const BoxNew = styled.div``;
export const ImgNext = styled(image)``;
export const Shadow = styled.div`
  width: 338px;
  height: 250px;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%);
  position: absolute;
  z-index: 2;
`;
