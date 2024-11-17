import * as S from "./calendar.styled";
import "react-day-picker/dist/style.css";
import "react-day-picker/style.css";

export const Calendar = ({ date, setDate, disabled }) => {
    const handlSelected = (selectedDate) => {
        if (!disabled) { 
            setDate(selectedDate);
        }
    };
    
    return (
        <S.Calendar
            mode="single"
            selected={date}
            onSelect={handlSelected}
            modifiers={{
                disabled: disabled ? { from: new Date(1900, 0, 1), to: new Date(2100, 11, 31) } : undefined, // Отключает все даты
            }}
            modifiersStyles={{
                disabled: {
                    color: "#ccc",
                    cursor: "not-allowed",
                },
            }}
        />
    );
};
