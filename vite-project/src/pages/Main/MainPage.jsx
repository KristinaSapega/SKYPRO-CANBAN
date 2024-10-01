import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
//import { PopBrowse } from '../../components/PopBrowse';
import { PopNewCard } from '../../components/PopNewCard';
//import { PopUser } from '../../components/PopUser';
//import { cardList } from "../../data.js";
import { Wrapper } from "../../global.styled.js";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/tasks.js";
import { useUserContext } from "../../context/useUserContext.js";


export const MainPage = ({ changeTheme, setChangeTheme, setUser }) => {

    const {user} = useUserContext();

    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const addCard = () => {

        const newCard = {
            id: cards.length + 1,
            topic: "Web Design",
            title: "Новая задача",
            date: "30.10.23",
            status: "Без статуса",
        }
        setCards([...cards, newCard])
    }

    useEffect(() => {
        console.log(user)
        if (user && user.token) {
            getTasks(user.token)
            .then((resp) => {
                setCards(resp.tasks);
            })
            .catch((error) => {
                setError("Ошибка загрузки данных: " + error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
        } else {
            setError("Пользователь не авторизован или отсутствует токен.");
            setIsLoading(false);
        }
    }, [user]);

    return (

        <Wrapper>
            <Header addCard={addCard} setUser={setUser} setChangeTheme={setChangeTheme} changeTheme={changeTheme} />
            {isLoading ? (
                <p className="loader"> Данные загружаются...</p> 
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                 <Main cards={cards}/>
            )}
            {/* <PopBrowse /> */}
            <PopNewCard />
            {/* <PopUser /> */}
            <Outlet />
        </Wrapper>
    )
}
