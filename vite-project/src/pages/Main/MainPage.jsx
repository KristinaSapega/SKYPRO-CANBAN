import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
//import { PopBrowse } from '../../components/PopBrowse';
import { PopNewCard } from '../../components/PopNewCard/popNewCard.jsx';
//import { PopUser } from '../../components/PopUser';
//import { cardList } from "../../data.js";
import { Wrapper } from "../../global.styled.js";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/tasks.js";
import { useUserContext } from "../../context/useUserContext.js";
import { useTasksContext } from "../../context/useTasksContext.js";


export const MainPage = ({ changeTheme, setChangeTheme, setUser }) => {

    const {user} = useUserContext();

    const {tasks, setTasks} = useTasksContext();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    

    useEffect(() => {
        console.log(user)
        if (user && user.token) {
            getTasks(user.token)
            .then((resp) => {
                setTasks(resp.tasks);
            })
            .catch((error) => {
                console.log (error);
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

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (

        <Wrapper>
            <Outlet />
            <Header 
            setUser={setUser} 
            setChangeTheme={setChangeTheme} 
            changeTheme={changeTheme} 
            openModal={openModal}/>

            {isLoading ? (
                <p className="loader"> Данные загружаются...</p> 
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                 <Main tasks={tasks}/>
            )}

            {isModalOpen && <PopNewCard onClose={closeModal} />}
            {/* <PopBrowse /> */}
            {/* <PopUser /> */}
            <Outlet />
        </Wrapper>
    )
}
