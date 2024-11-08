import { useState } from "react";
import { Calendar } from "../Calendar";
import * as S from "./popNewCard.styled"
import { routes } from "../../router/routes";
import { Link, useNavigate } from "react-router-dom";
import { useTasksContext } from "../../context/useTasksContext";
import { addTask as addTaskApi } from "../../api/tasks";
import { useUserContext } from "../../context/useUserContext";
import { format } from "date-fns";

export const PopNewCard = () => {
	const { user } = useUserContext();

	const nav = useNavigate();

	const [taskDate, setTaskDate] = useState(null);

	const [error, setError] = useState("");

	const [dateMessage, setDateMessage] = useState("Выберите срок исполнения");

	const { setTasks } = useTasksContext();

	const [newTask, setNewTask] = useState({
		title: "",
		status: "Без статуса",
		description: "",
		topic: "",
	});


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
		if (!taskDate) {
			setError("Выберите срок исполнения");
			return;
		}
		if (newTask.topic === "") {
			setError("Выберите категорию задачи");
			return;
		}
		const newCard = {
			title: newTask.title,
			topic: newTask.topic,
			description: newTask.description ? newTask.description.trim() : "",
			date: taskDate || new Date(),
			status: "Без статуса",

		};

		try {
			const res = await addTaskApi(newCard, user.token);
			setTasks(res.tasks); //Обновляем состояние задач
			nav(routes.main);
		} catch (error) {
			setError(error.message)
		}
	};

	//const [activeCategory, setActiveCategory] = useState("");

	const handleCategoryClick = (category) => {
		setNewTask({ ...newTask, topic: category });
		console.log("Выбрана категория:", category);
	};

	const handleDateChange = (selectedDate) => {
		console.log("Selected Date: ", selectedDate);
		setTaskDate(selectedDate);
		if (selectedDate) {
			setDateMessage(`Срок исполнения: ${format(selectedDate, "dd.MM.yyyy")}`);
		} else {
			setDateMessage("Выберите срок исполнения");
		}
	};


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
											setNewTask({ ...newTask, title: e.target.value })
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
											setNewTask({ ...newTask, description: e.target.value })
										}
										name="text"
										id="textArea"
										placeholder="Введите описание задачи..."
										value={newTask.description} />
								</S.FormNewBlock>
							</S.PopNewCardForm>
							<S.Calendar>
								<S.CalendarTtl>Даты</S.CalendarTtl>
								<Calendar date={taskDate} setDate={handleDateChange} />
								{/* <Calendar onChange={handleDateChange} selected={taskDate} /> */}
								<S.CalendarContentP> {dateMessage} </S.CalendarContentP>

							</S.Calendar>
						</S.PopNewCardWrap>
						<S.PopNewCardCategories>
							<S.CategoriesPSubttl>Категория</S.CategoriesPSubttl>
							<S.CategoriesThemes>
								<S.TopicOrange
									$active={newTask.topic === "Web Design"}
									onClick={() => handleCategoryClick("Web Design")}
								>
									Web Design
								</S.TopicOrange>
								<S.TopicGreen
									$active={newTask.topic === "Research"}
									onClick={() => handleCategoryClick("Research")}
								>
									Research
								</S.TopicGreen>

								<S.TopicPurple
									$active={newTask.topic === "Copywriting"}
									onClick={() => handleCategoryClick("Copywriting")}
								>
									Copywriting
								</S.TopicPurple>
							</S.CategoriesThemes>
						</S.PopNewCardCategories>
						<S.FormNewCreate id="btnCreate" onClick={addNewTask}>
							Создать задачу
						</S.FormNewCreate>
						{error && <p style={{ color: "red" }}>{error}</p>}
					</S.PopNewCardContent>
				</S.PopNewCardBlock>
			</S.PopNewCardContainer>
		</S.PopNewCard>
	);
};
