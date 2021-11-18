import styled from 'styled-components';
import image from 'next/image';
export const BodyContainer = styled.div`
  margin-left: 30%;
  margin-right: 30%;
  @media (max-width:2100px){
    margin-left: 25%;
    margin-right: 25%;
  }
  @media (max-width: 2100px) {
    margin-left: 15%;
    margin-right: 15%;
  }
  @media (max-width: 1550px) {
    margin-left: 9%;
    margin-right: 9%;
  }
  display: grid;
  justify-content: left;
  grid-template-rows: 130px 60px 60px 470px 260px 260px 460px 200px ;
`;
export const Title = styled.h1`
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 36;
  line-height: 55px;
  color: #ffffff;
`;
export const SubTitle = styled.h2`
  font-family: Inter;
  font-weight: 500;
  font-size: 24px;
  line-height: 55px;
  color: #c4c4c4;
`;
export const Date = styled.h2`
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 55px;
  color: #c4c4c4;
`;
export const ImgNext = styled(image)``;
export const BoxImage = styled.div`
  margin-top: 26px;
`;
export const ButtonLorem = styled.button`
  background: #8257e6;
  border-radius: 3px;
  border: none;
  width: 100px;
  height: 30px;
  position: absolute;
  margin-top:15px;
  margin-left: 15px;
  z-index:2;
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 18px;
  line-height:22.5px;
  color:#ffffff;
  :hover{
    border: 1px solid #c4c4c4;
  }
`;
export const BigText= styled.text`
    font-family:Inter;
    font-weight:400;
    font-size: 24px;
    line-height:40px;
    color:#c4c4c4;
    margin-top: 43px;
    width: 1119px;
`
