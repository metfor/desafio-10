import styled from 'styled-components';
export const HeaderContainer = styled.div`
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
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.h1`
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  text-align: right;
  color: #8257e6;
`;
export const TextLink = styled.text`
  margin-top:3px ;
  font-family: Inter;
  font-size: 16px;
  line-height: 19.36px;
  text-align: right;
  font-weight: 500;
  color: white;
  position: relative;
  padding: 0 0.5rem;
  color: #c4c4c4;
  transition: color 0.2s;
  cursor: pointer;
  & + a {
    margin-left: 2rem;
  }
  &:hover {
    color: #8257e6;
  }
  &.active {
    color: white;
    font-weight: bold;
  }
  &.active::after {
    content: '';
    height: 3px;
    border-radius: 3px 3px 0 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #8257e6;
  }
`;
export const BoxLink = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  
`;
export const ButtonAcc = styled.button`
  width: 125px;
  height: 28px;
  border: 1px solid #8257e6;
  box-sizing: border-box;
  border-radius: 30px;
  background-color: #1a1a1a;
  color: #fbfbfb;
  font-family: Lexend Deca;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.5px;
  cursor: pointer;
`;
