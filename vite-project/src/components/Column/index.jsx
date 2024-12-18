import { Card } from "../Card";
import * as S from "./column.styled";

export const Column = ({ title, tasks }) => {
    
    return (
        <S.Column>
            <S.ColumnTitle>
                <p>{title}</p>
            </S.ColumnTitle>
            <div className="cards">
                {tasks.map((card) =>
                    <Card
                        key={card._id}
                        id={card._id}
                        themeClass={card.themeClass}
                        topic={card.topic}
                        title={card.title}
                        date={card.date}
                        link={card.link}
                    />)}



            </div>
        </S.Column>
    )
}
