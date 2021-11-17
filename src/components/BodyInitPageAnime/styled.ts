import styled from 'styled-components';
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
`;
export const BoxFImg = styled.div`
  margin-top: 100px;
`;
export const Shadow = styled.div`
  background: linear-gradient(
    0.01deg,
    #13131f 0.01%,
    rgba(19, 19, 31, 0) 99.99%
  );
  transform: rotate(180deg);
  position: absolute;
  z-index: 2;
  width: 1119px;
  height: 300px;
`;
export const TextTitlePage = styled.h1`
  font-family: Lexend Deca;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 55px;
  letter-spacing: 0em;
  text-align: left;
  color: #fefbfb;
  position: absolute;
  z-index: 2;
  margin-left: 40px;
  margin-top: 40px;
`;
export const TextSubPage = styled.h2`
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #c4c4c4;
  position: absolute;
  z-index: 2;
  margin-left: 45px;
  margin-top: 120px;
`;
export const SearchBox = styled.div`
  margin-top: 42px;
  width: 1119px;
  height: 60px;
  background: #282830;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 18px;
`;
export const MyInput = styled.input`
  background: #282830;
  border: none;
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #989898;
  width: 800px;
`;
export const AnimeList = styled.div`
  display: grid;
  grid-template-columns: 338px 338px 338px;
  grid-column-gap: 52px;
  grid-row-gap: 52px;
  margin-top: 100px;
`;
export const AnimeImg = styled.div``;
export const Shadow2 = styled.div`
  background: linear-gradient(
    359.82deg,
    #13131f 0.15%,
    rgba(19, 19, 31, 0) 99.85%
  );
  position: absolute;
  z-index: 2;
  width: 338px;
  height: 250px;
`;

export const Pages = styled.div`
  display: grid;
  grid-template-columns: 32px 32px 32px 32px 32px 32px 32px;
  grid-column-gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 62px;
`;
export const ButtonDesactivated = styled.button`
  width: 32px;
  height: 32px;
  background: #282830;
  border-radius: 3px;
  border: none;
  color: #545454;
  font-size: 18px;
`;
export const ButtonActive = styled.button`
  width: 32px;
  height: 32px;
  background: #282830;
  border: 1px solid #8257e6;
  box-sizing: border-box;
  border-radius: 3px;
  color: #8257e6;
  font-size: 18px;
`;
export const Button = styled.button`
  background: #282830;
  border-radius: 3px;
  width: 32px;
  height: 32px;
  font-size: 18px;
  border: none;
  color: #c4c4c4;
`;
