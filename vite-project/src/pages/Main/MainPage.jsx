import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
//import { PopBrowse } from '../../components/PopBrowse';
import { PopNewCard } from '../../components/PopNewCard';
//import { PopUser } from '../../components/PopUser';
import { cardList } from "../../data.js";
import { Wrapper } from "../../global.styled.js";
import { Outlet } from "react-router-dom";


export const MainPage = ({ changeTheme, setChangeTheme }) => {
    const [cards, setCards] = useState(cardList)
    const [isLoading, setIsLoading] = useState(false)

    const addCard = () => {

        const newCard = {
            id: cards.length + 1,
            themeText: "Web Design",
            title: "Новая задача",
            date: "30.10.23",
            status: "Без статуса",
        }
        setCards([...cards, newCard])
    }

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, []);

    return (

        <Wrapper>
            <Header addCard={addCard} setChangeTheme={setChangeTheme} changeTheme={changeTheme} />
            {isLoading ? <p className="loader"> Данные загружаются...</p> : <Main cards={cards}/>}
            {/* <PopBrowse /> */}
            <PopNewCard />
            {/* <PopUser /> */}
            <Outlet />
        </Wrapper>
    )
}
