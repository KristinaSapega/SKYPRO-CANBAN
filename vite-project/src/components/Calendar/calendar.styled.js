import styled from "styled-components";
import { DayPicker } from "react-day-picker";



export const Calendar = styled(DayPicker) `
 --rdp-cell-size: 24px;
  --rdp-caption-font-size: 12px;
  --rdp-accent-color: rgb(148, 166, 190);
  --rdp-background-color: rgb(234, 238, 246);
  --rdp-accent-color-dark: rgb(148, 166, 190);
  --rdp-accent-color: #94A6BE;
  --rdp-background-color: #EAEEF6;
  --rdp-accent-color-dark: #94A6BE;
  --rdp-background-color-dark: rgb(21, 20, 25);
  --rdp-outline: 2px solid var(--rdp-accent-color);
  --rdp-outline-selected: 3px solid var(--rdp-accent-color);
  --rdp-selected-color: #fff;
  color: rgb(148, 166, 190);
  font-size: 10px;
  font-weight: 400;

`;

