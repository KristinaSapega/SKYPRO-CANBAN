import { Card } from "../Card";
import * as S from "./column.styled";

export const Column = ({ title, tasks }) => {
    // const cardList = [
    //     { themeClass: '_green', themeText: 'Research', title: 'Название задачи', date: '30.10.23', link: '' },
    //     { themeClass: '_orange', themeText: 'Web Design', title: 'Название задачи', date: '30.10.23', link: '' },
    //     { themeClass: '_purple', themeText: 'Copywriting', title: 'Название задачи', date: '30.10.23', link: '' },
    //     { themeClass: '_orange', themeText: 'Web Design', title: 'Название задачи', date: '30.10.23', link: '' },
    // ];
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
