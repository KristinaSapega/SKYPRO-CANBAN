import styled from "styled-components";
import { Link } from "react-router-dom";
import { themeColor } from "../../global.styled";

export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
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

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const CategoriesTheme = styled.div`
  opacity: 1;
  width: 115px;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $color }) => themeColor($color)}

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const StatusContainer = styled.div`
  margin-bottom: 11px;
`;

export const BrowseStatusP = styled.p`
  margin-bottom: 14px;
`;

export const BrowseStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer; 
  
  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormTextAreaBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTextArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
  }
`;

// Основная стилизация для контейнеров кнопок
export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px; /* Дополнительный отступ для разделения от предыдущих элементов */
`;

// Групповой контейнер для кнопок с отступом справа
export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > button {
    margin-right: 8px;
    height: 30px;
    padding: 0 14px;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

// Базовая стилизация для кнопок
export const Button = styled.button`
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  padding: 0 14px;
  outline: none;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  margin-bottom: 10px;
`;

// Кнопка редактирования с обводкой
export const ButtonChangeDelete = styled(Button)`
  background-color: transparent;
  color: #565eef;
  border: 0.7px solid #565eef;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

// Кнопка закрытия с фоном
export const ButtonClose = styled(Button)`
  background-color: #565eef;
  color: #ffffff;
  border: none;

  &:hover {
    background-color: #33399b;
  }
`;

export const ButtonLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
