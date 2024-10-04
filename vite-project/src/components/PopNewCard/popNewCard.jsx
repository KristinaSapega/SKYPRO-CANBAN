import { useState } from "react";
import { Calendar } from "../Calendar";
import * as S from "./popNewCard.styled"
import { routes } from "../../router/routes";
import { Link, useNavigate} from "react-router-dom";
import { useTasksContext } from "../../context/useTasksContext";
import { addTask as addTaskApi } from "../../api/tasks";
import { useUserContext } from "../../context/useUserContext";

export const PopNewCard = () => {
	const {user} = useUserContext();

	const nav = useNavigate();

	const [date, setDate] = useState(null);

	const [error, setError] = useState("");
	
	const {tasks, setTasks} = useTasksContext();
 
	const [newTask, setNewTask] = useState ({
		title: "",
		status: "Без статуса",
		description: "",
		topic: "",
	});

	const newCard = {
		title: newTask.title,
		topic: newTask.topic,
		description: newTask.description ? newTask.description.trim() : "",
		date: date || new Date(),
		
	};

	const addNewTask = async (e) => {
		e.preventDefault();

		if (newTask.title === "") {
			setError("Введите название задачи");
			return;
		}
		if (newTask.description === "") {
			setError("Введите описание задачи");
			return;
		}
		// if (!date) {
		// 	setError("Выберите срок исполнения");
		// 	return;
		// }
		if (newTask.topic === "") {
			setError("Выберите категорию задачи");
			return;
		}
		try {
			const res = await addTaskApi(newCard, user.token);
				setTasks([...tasks, res.task]); //Обновляем состояние задач
				nav(routes.main);
		}catch (error) {
			setError(error.message)
		}
	};

	const [activeCategory, setActiveCategory] = useState(""); 

  const handleCategoryClick = (category) => {
    setNewTask({ ...newTask, topic: category });
    setActiveCategory(category); 
    console.log("Выбрана категория:", category); 
  };

	// const addTask = () => {
    //     const newTask = {
    //         id: tasks.length + 1,
    //         topic: "Web Design",
    //         title: "Новая задача",
    //         date: date || new Date(),
    //         status: "Без статуса",
    //     }
    //     setTasks([...tasks, newTask])
    // }
	 
    return (
        <S.PopNewCard>
				<S.PopNewCardContainer>
					<S.PopNewCardBlock>
						<S.PopNewCardContent>
							<S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
							<Link to={routes.main}>
							<S.PopNewCardClose >&#10006;</S.PopNewCardClose>
							</Link>
							<S.PopNewCardWrap>
								<S.PopNewCardForm action="#">
									<S.FormNewBlock>
										<S.PopNewCardLabel htmlFor="formTitle" >Название задачи</S.PopNewCardLabel>
										<S.FormNewInput 
										onChange={(e) =>
											setNewTask({...newTask, title: e.target.value})
										}
										type="text"
										name="name"
										id="formTitle" 
										placeholder="Введите название задачи..." 
										value={newTask.title}
										autoFocus />
									</S.FormNewBlock>
									<S.FormNewBlock>
										<S.PopNewCardLabel htmlFor="textArea">Описание задачи</S.PopNewCardLabel>
										<S.FormNewArea
										onChange={(e) =>
											setNewTask({...newTask, description: e.target.value})
										} 
										name="text"
										id="textArea"  
										placeholder="Введите описание задачи..."
										value={newTask.description} />
									</S.FormNewBlock>
								</S.PopNewCardForm>
								<S.Calendar>
									<S.CalendarTtl>Даты</S.CalendarTtl>
									<Calendar onChange={setDate} selected={date}  />
									
										<div className="calendar__period">
											<p className="calendar__p date-end">
												Выберите срок исполнения <span className="date-control"></span></p>
										</div>

									</S.Calendar>
						</S.PopNewCardWrap>
						<S.PopNewCardCategories>
							<S.CategoriesPSubttl>Категория</S.CategoriesPSubttl>
							<S.CategoriesThemes>
								<div className={`categories__theme _orange ${activeCategory === "Web Design" ? "_active-category" : ""}`}
									onClick={() => handleCategoryClick("Web Design")}>
									<p className="_orange">Web Design</p>
								</div>
								<div className={`categories__theme _green ${activeCategory === "Research" ? "_active-category" : ""}`}
									onClick={() => handleCategoryClick("Research")}>
									<p className="_green">Research</p>
								</div>
								<div className={`categories__theme _purple ${activeCategory === "Copywriting" ? "_active-category" : ""}`} 
									onClick={() => handleCategoryClick("Copywriting")}>
									<p className="_purple">Copywriting</p>
								</div>
							</S.CategoriesThemes>
							</S.PopNewCardCategories>
							<button className="form-new__create _hover01" id="btnCreate" onClick={addNewTask}>Создать задачу</button>
							{error && <p style={{ color: "red" }}>{error}</p>}
						</S.PopNewCardContent>
					</S.PopNewCardBlock>
				</S.PopNewCardContainer>
			</S.PopNewCard>
    );
};
