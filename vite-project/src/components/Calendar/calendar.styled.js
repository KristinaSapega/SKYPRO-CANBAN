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
width: 168px !important;
max-width: 168px;

  color: rgb(148, 166, 190);
   font-size: 10px; 

    .rdp-caption_label {
    font-size: 12px;
  }

  .rdp-button_previous,
  .rdp-button_next {
    width: 20px;
    height: 20px;
  }
   
   .rdp-day.rdp-selected {
    background-color: #94A6BE;
    color: white;
    border-radius: 50%;
   }

.rdp-grid {
    gap: 14px; 
  }

  
`;

