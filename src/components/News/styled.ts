import styled from 'styled-components';
import image from 'next/image';
export const NewsContainer = styled.div`
  margin-top: 80px;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: space-between;
`;
export const BigNewsContainer = styled.div`
  display: flex;
  width: 701px;
  height: 350px;
`;
export const Myimage = styled(image)``;
export const BoxImage = styled.div`
  position: absolute;
  width: 711px;
  height: 360px;
  margin-top: -12px;
  z-index: 1;
`;
export const Title = styled.text`
  font-family: Lexend Deca;
  font-size: 24px;
  line-height: 34px;
  color: #fefbfb;
  font-weight: 400;
  margin-top: 220px;
  margin-left: 30px;
  z-index: 4;
`;
export const Shadow = styled.div`
  margin-top: -12px;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%);
  position: absolute;
  width: 711px;
  height: 350px;
  z-index: 4;
`;
export const LittleNews = styled.div`
  display: grid;
  grid-template-columns: 320px;
  margin-right: -30px;
`;
export const LitteShadows = styled.div`
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%);
  position: absolute;
  width: 320px;
  height: 158px;
  z-index: 2;
`;
export const LittleBox = styled.div`
  display: flex;
`;
export const LittleTitle = styled.text`
  font-family: Lexend Deca;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: #fefbfb;
  z-index: 2;
  margin-top:85px;
  margin-left: 15px;
`;
export const LitleImg = styled.div`
  position: absolute;
  width: 320px;
  height: 158px;
  z-index: 1;
`
export const BigButton = styled.button`
  background: #8257E6;
  border-radius: 3px;
  border:none;
  width: 80px;
  height: 25px;
  z-index:4;
  margin-top:17px;
  margin-left: 30px;
  font-family: Lexend Deca;
  font-weight: 400;
  font-size:14px;
  line-height:17.5px;
  color:#fefbfb;
  position: absolute;
`
export const LitleButton = styled.button`
  background: #8257E6;
  border-radius: 3px;
  border:none;
  width: 70px;
  height: 25px;
  z-index:4;
  margin-top:17px;
  margin-left: 30px;
  font-family: Lexend Deca;
  font-weight: 400;
  font-size:12px;
  line-height:15px;
  color:#fefbfb;
  position: absolute;
`