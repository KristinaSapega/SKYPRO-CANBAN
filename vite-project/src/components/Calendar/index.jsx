
import * as S from "./calendar.styled";
import "react-day-picker/dist/style.css";
import "react-day-picker/style.css";

export const Calendar = ({ date, setDate }) => {
    const handlSelected = (selectedDate) => {
        setDate(selectedDate);
    }
    
    return (
        <S.Calendar
        mode="single"
        selected={date}
        onSelect={handlSelected}
        
        />
 
    )
}
