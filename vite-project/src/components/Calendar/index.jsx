
import * as S from "./calendar.styled";
import "react-day-picker/dist/style.css";
import "react-day-picker/style.css";
//import { DayPicker } from "react-day-picker";

export const Calendar = ({ date, setDate }) => {
    
    return (
        <S.Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        
        />
 
    )
}
