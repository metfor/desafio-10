import styled from 'styled-components';
import image from 'next/image';
export const BodyContainer = styled.div`
  margin-top: 40px;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: space-between;
`;
export const BoxNewsBody = styled.div`
  display: grid;
  grid-row-gap: 35px;
`;
export const ImgBox = styled.div`
  z-index: 1;
`;
export const ImgNext = styled(image)``;
export const NewsBox = styled.div`
  display: grid;
  grid-template-columns: 218px 390px;
`;
export const Shadow = styled.div`
  width: 200px;
  height: 151px;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%);
  position: absolute;
  z-index: 2;
`;
export const ButtonLorem = styled.button`
  width: 60px;
  height: 15px;
  background: #8257e6;
  border-radius: 3px;
  border: none;
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 10px;
  line-height: 12.5px;
  position: absolute;
  z-index: 2;
  margin-top: 10px;
  margin-left: 10px;
`;
export const TextBox = styled.div`
  display: grid;
  grid-template-rows: 40px 40px;
`;

export const TextTitle = styled.text`
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #fefbfb;
`;
export const TextSub = styled.h2`
  font-family: Inter;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: #c4c4c4;
`;
export const Data = styled.p`
  font-family: Inter;
  font-weight: 600;
  font-size: 10px;
  line-height: 20px;
  color: #c4c4c4;
`;
export const ButtonRead = styled.button`
  background: #8257e6;
  border-radius: 3px;
  border:none;
  width: 100px;
  height: 25px;
  font-family: Inter;
  font-weight: 600;
  font-size:11px;
  line-height:20px;
  color:#fefbfb;
`;
