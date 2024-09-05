import { Card } from "../Card";


// eslint-disable-next-line react/prop-types
export const Column = ({ title, cards }) => {
    // const cardList = [
    //     { themeClass: '_green', themeText: 'Research', title: 'Название задачи', date: '30.10.23', link: '' },
    //     { themeClass: '_orange', themeText: 'Web Design', title: 'Название задачи', date: '30.10.23', link: '' },
    //     { themeClass: '_purple', themeText: 'Copywriting', title: 'Название задачи', date: '30.10.23', link: '' },
    //     { themeClass: '_orange', themeText: 'Web Design', title: 'Название задачи', date: '30.10.23', link: '' },
    // ];
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {cards.map((card, id) =>
                    <Card
                        key={card.id}
                        themeClass={card.themeClass}
                        themeText={card.themeText}
                        title={card.title}
                        date={card.date}
                        link={card.link}
                    />)}



            </div>
        </div>
    )
}
