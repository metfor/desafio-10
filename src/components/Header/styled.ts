import styled from 'styled-components';
export const HeaderContainer = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
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
  font-family: Inter;
  font-size: 16px;
  line-height: 19.36px;
  text-align: right;
  font-weight: 500;
  color: white;
  position: relative;
  padding: 0 0.5rem;
  color: #f1f1f1;
  transition: color 0.2s;
    & + a {
        margin-left: 2rem;
    }
    &:hover {
        color: white;
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
        background:  #8257E6;
;
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
`;
