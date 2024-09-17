import styled from "styled-components";
import { Hover01, Hover03 } from "../../global.styled";

//стили для плашки Ivan Ivanov в header 
export const PopUserSet = styled.div `
display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: ${({ theme }) => theme.popUserSet};
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;
`

export const PopUserSetName = styled.p `
color: ${({ theme }) => theme.popUserSetName};
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: -0.14px;
margin-bottom: 4px;
`
export const PopUserSetMail = styled.p `
color: ${({ theme }) => theme.popUserSetMail};
font-size: 14px;
line-height: 21px;
letter-spacing: -0.14px;
margin-bottom: 10px;
`
export const PopUserSetTheme = styled.div `
display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    p {
        color: ${({ theme }) => theme.popTheme};
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.14px;
    }

    input[type='checkbox'] {
        position: relative;
        width: 24px;
        height: 13px;
        border-radius: 100px;
        background: #eaeef6;
        outline: none;
        appearance: none;

        &::before {
            content: '';
            position: absolute;
            top: 1px;
            left: 1px;
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background-color: ${({theme}) => theme.checkbox};
            ;
            transition: 0.5s;
        }

        &:checked::before {
            left: 12px;
        }
    }
`

export const PopBtn = styled.button `
 width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;

  a {
    color: #565EEF;
  }
`;

//стили для всплывающего окна
export const PopExit = styled.div `
width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;
export const PopExitContainer = styled.div `
width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopExitBlog = styled.div `
display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.popExitBlog};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const PopExitTitle = styled.h2 `
text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.popExitTitle};
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PopExitButtonYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;

  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  ${Hover01}
  
`;

export const PopExitButtonNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid ${({theme}) => theme.popExiteBtnBorder};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${({theme}) => theme.popExiteBtnNo};

  a {
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.popExiteBtnNo};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  ${Hover03}
`;
