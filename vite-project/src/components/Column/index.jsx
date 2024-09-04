import { Card } from "../Card";


// eslint-disable-next-line react/prop-types
export const Column = ({ title }) => {
    const cardsData = [
        { themeClass: '_green', themeText: 'Research', title: 'Название задачи', date: '30.10.23', link: '' },
        { themeClass: '_orange', themeText: 'Web Design', title: 'Название задачи', date: '30.10.23', link: '' },
        { themeClass: '_purple', themeText: 'Copywriting', title: 'Название задачи', date: '30.10.23', link: '' },
        { themeClass: '_orange', themeText: 'Web Design', title: 'Название задачи', date: '30.10.23', link: '' },
    ];
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {cardsData.map((card, index) =>
                    <Card
                        key={index}
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
