import styled from "styled-components";

export const PopNewCard = styled.div `
 width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const PopNewCardContainer = styled.div `
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

export const PopNewCardBlock = styled.div `
display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`;

export const PopNewCardContent = styled.div `
display: block;
text-align: left;

a {
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;

    &:hover {
      color: #000000;
    }
  }
`;

export const PopNewCardTtl = styled.h3 `
color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled.a `
 position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const PopNewCardWrap = styled.div `
display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopNewCardForm = styled.form `
max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormNewBlock = styled.div `
display: flex;
flex-direction: column;
`
export const PopNewCardLabel = styled.label `
color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormNewInput = styled.input `
width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  font-family: "Roboto";

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`;

export const FormNewArea = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  font-family: "Roboto";

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
    vertical-align: top;
  }
`;

export const Calendar = styled.div `
margin-bottom: 20px;
width: 100%; /* Устанавливаем календарь на всю ширину родительского блока */
max-width: 300px; /* Максимальная ширина для удобного отображения */
margin-bottom: 20px;
`;

export const CalendarTtl = styled.p `
 margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopNewCardCategories = styled.div `
margin-bottom: 20px;

`;

export const CategoriesPSubttl = styled.p`
margin-bottom: 14px;
font-size: 14px;
font-weight: 600;
line-height: 1;
`;

export const CategoriesThemes = styled.div `
display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;



