import styled from 'styled-components';
import image from 'next/image';
export const BodyContainer = styled.div`
  margin-top: 40px;
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
  @media (max-width: 1550px) {
    margin-left: 10%;
    margin-right: 10%;
  }
  display: flex;
  justify-content: space-between;
`;
export const BoxNewsBody = styled.div`
  display: grid;
  grid-row-gap: 35px;
  width: 80px;
  position: relative;
`;
export const ImgBox = styled.div`
  z-index: 1;
  cursor: pointer;
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
  cursor: pointer;
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
  color: #fefbfb;
  cursor: pointer;
  :hover{
    border: 1px solid #c4c4c4;
  }
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
  border: none;
  width: 100px;
  height: 25px;
  font-family: Inter;
  font-weight: 600;
  font-size: 11px;
  line-height: 20px;
  color: #fefbfb;
  cursor: pointer;
  :hover{
    border: 1px solid #c4c4c4;
  }
`;
export const BoxBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  height:900px;
  overflow: auto;
  ::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px ; 
  border-radius: 10px;
  background: #282830;
;
}
::-webkit-scrollbar-thumb {
  background: #8257e6; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #8257e6;
  border: 1px solid #c4c4c4;
}

`;
export const BarrBlack = styled.div`
  width: 12px;
  height: 894px;
  background: #282830;
  position: absolute;
`;
export const BarrPurple = styled.div`
  width: 8px;
  height: 343px;
  background: #8257e6;
  margin-left: 2px;
`;
export const BoxBarr = styled.div`
  margin-left: 100px;
`;

export const SideBar = styled.div`
  display: grid;
`;
export const Title = styled.text`
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 24px;
  line-height: 20px;
  color: #fefbfb;
`;
export const BoxTextSide = styled.div`
  position: absolute;
  margin-left: -290px;
  
`;
export const BarText = styled.div`
  width: 250px;
  height: 3px;
  background: #8257e6;
  margin-top: 13px;
`;
export const BoxNewsSideBar = styled.div`
  margin-top: 80px;
  margin-left: -390px;
  display: grid;
  grid-template-columns: 318px;
  grid-template-rows: 165px;
  grid-gap: 35px;
  cursor: pointer;
`;
export const ShadowBig = styled.div`
  width: 337px;
  height: 250px;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%);
  position: absolute;
  z-index: 2;
`;
export const ButtonLoremBig = styled.button`
  width: 70px;
  height: 20px;
  background: #8257e6;
  border-radius: 3px;
  border: none;
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  position: absolute;
  z-index: 2;
  margin-top: 10px;
  margin-left: 10px;
  color: #fefbfb;
  cursor: pointer;
  :hover{
    border: 1px solid #c4c4c4;
  }
`;
export const Block = styled.div`
  display: grid;
  grid-template-rows: 250px;
  grid-row-gap: 50px;
  position: absolute;
  margin-left: 100px;
`;
export const TextSideBar = styled.text`
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #fefbfb;
  position: absolute;
  z-index: 2;
  width: 303px;
  margin-top: 180px;
  margin-left: 15px;
`;
