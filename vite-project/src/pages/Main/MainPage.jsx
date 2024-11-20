import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { PopNewCard } from '../../components/PopNewCard/popNewCard.jsx';
import { Loader, Wrapper } from "../../global.styled.js";
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
        if (user && user.token) {
            getTasks(user.token)
            .then((resp) => {
                setTasks(resp.tasks);
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
                <Loader> Данные загружаются...</Loader> 
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                 <Main tasks={tasks}/>
            )}

            {isModalOpen && <PopNewCard onClose={closeModal} />}
            
        </Wrapper>
    )
}
