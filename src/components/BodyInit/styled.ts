import styled from 'styled-components';
export const BodyContainer = styled.div`
  margin-top: 100px;
  margin-left: 29.5%;
  margin-right: 29.5%;
  display: grid;
  align-items: left;
  grid-template-rows: 140px;
  grid-row-gap: 11px;
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
`;
export const Title = styled.h1`
  font-family: Lexend Deca;
  font-size: 48px;
  line-height: 50px;
  font-weight: 400;
  color: #fbfbfb;
`;
export const Desc = styled.text`
  font-family: Inter;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  color: #c4c4c4;
`;
export const DescBox = styled.div``;
