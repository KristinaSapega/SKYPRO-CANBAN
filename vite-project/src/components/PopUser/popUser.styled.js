import styled from "styled-components";

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

