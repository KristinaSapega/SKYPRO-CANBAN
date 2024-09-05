import css from 'styled-components';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, sans-serif;
    color: #000;
  }
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;


export const Container = styled.div`
max-width: 1260px;
width: 100%;
margin: 0 auto;
padding: 0 30px;
`;

export const Hover01 = css`
&:hover {
background-color: #33399b;
}
`;

export const Hover02 = css`
&:hover {
color: #33399b;

}

&::after {
border-left-color: #33399b;
  border-bottom-color: #33399b;
  }

`;




