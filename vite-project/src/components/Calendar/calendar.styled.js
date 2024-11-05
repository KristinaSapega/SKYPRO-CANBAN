import styled from "styled-components";
import { DayPicker } from "react-day-picker";



export const Calendar = styled(DayPicker) `
--rdp-accent-color: rgb(148, 166, 190);
--rdp-day-font: 10px;
--rdp-day-height: 22px;
--rdp-day-width: 22px;
--rdp-month_caption-font: 10px;
--rdp-selected-font:10px;
--rdp-accent-background-color: rgb(234, 238, 246);

  color: rgb(148, 166, 190);
   font-size: 10px; 
   .rdp-day.rdp-selected {
    background-color: #94A6BE;
    color: white;
    border-radius: 50%;
   }
  //font-weight: 400; 

  /* width: 182px;
  margin-bottom: 20px; */

`;
// export const CalendarContentP = styled.p`
//   width: 100px;
//   color: #94a6be;
//   font-family: Roboto;
//   font-size: 10px;
//   font-weight: 400;
//   line-height: 12px;
//   text-align: left;
//   height: 22px;
//   margin-top: 14px;
// `;

// export const SelectedDate = styled.span`
//   color: black;
//   font-family: Roboto;
// `;

