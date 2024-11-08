import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./popBrowse.styled";
import { Calendar } from "../Calendar";
import { useEffect, useState } from "react";
import { deleteTask, getTaskById, updateTask } from "../../api/tasks";
import { useTasksContext } from "../../context/useTasksContext";
import { useUserContext } from "../../context/useUserContext";

export const PopBrowse = () => {
	const { cardId } = useParams();
	const { user } = useUserContext();
	const navigate = useNavigate();
	const [date, setDate] = useState(new Date());
	const [status, setStatus] = useState("Нужно сделать");
	const [description, setDescription] = useState("");
	const [title, setTitle] = useState("");
	const [topic, setTopic] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const { setTasks } = useTasksContext();


	useEffect(() => {
		const loadTask = async () => {
			if (!cardId || !user?.token) return;

			try {
				const taskData = await getTaskById(cardId, user.token);
				setTitle(taskData.title);
				setStatus(taskData.status);
				setDescription(taskData.description);
				setDate(new Date(taskData.date));
				setTopic(taskData.topic);
			} catch (error) {
				console.error("Ошибка при загрузке задачи:", error);
				alert(error.message || "Не удалось загрузить данные задачи. Попробуйте позже.");
			}
		};

		loadTask();
	}, [cardId, user?.token]);

	const handleDeleteTask = async (e) => {
		e.preventDefault();
		if (!cardId) {
			console.error("Идентификатор задачи отсутствует.");
			alert("Не удалось найти задачу для удаления.");
			return;
		}
		if (!user || !user.token) {
			alert("Токен не найден. Пожалуйста, авторизуйтесь заново.");
			return;
		}
		try {
			const updatedTasks = await deleteTask(cardId, user.token);
			setTasks(updatedTasks);
			navigate(routes.main);
		} catch (error) {
			console.error("Ошибка при удалении задачи:", error);
			alert("Не удалось удалить задачу. Пожалуйста, попробуйте снова.");
		}
	};

	const handleEditTask = () => {
		setIsEditing(true); // Включаем режим редактирования
	};

	const handleSaveTask = async (e) => {
		e.preventDefault();
		if (!user || !user.token) {
			alert("Токен не найден. Пожалуйста, авторизуйтесь заново.");
			return;
		}
		try {
			const updatedData = {
				title,
				status,
				description,
				date: date.toISOString(),
				topic: topic,
			};
			const updatedTasks = await updateTask(cardId, updatedData, user.token);
			setTasks(updatedTasks.tasks); // Обновляем список задач
			setIsEditing(false); // Возврат в режим просмотра
		} catch (error) {
			console.error("Ошибка при сохранении задачи:", error);
			alert("Не удалось сохранить задачу. Пожалуйста, попробуйте снова.");
		}
	};

	const handleCancelEdit = () => {
		setIsEditing(false); // Отмена редактирования
	};

	const handleStatusClick = (stat) => {
		if (isEditing) {
			setStatus(stat);
		}
	};


	return (
		<S.PopBrowse>
			<S.PopBrowseContainer>
				<S.PopBrowseBlock>
					<S.PopBrowseContent>
						<S.PopBrowseTopBlock>
							<S.PopBrowseTtl>
								Название задачи: {title}
							</S.PopBrowseTtl>
							<S.CategoriesTheme $color={topic}>
								<p>{topic}</p>
							</S.CategoriesTheme>
						</S.PopBrowseTopBlock>
						<S.StatusContainer>
							<S.BrowseStatusP>Статус</S.BrowseStatusP>
							<S.BrowseStatusThemes>
								{isEditing
									? ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"].map((stat) => (
										<S.StatusTheme
											key={stat}
											onClick={() => handleStatusClick(stat)}
											$isActive={status === stat}
											$isSelected={status === stat}
										>
											<p>{stat}</p>
										</S.StatusTheme>
									))
									: (
										<S.StatusTheme $isActive={true} $isSelected={true}>
											<p>{status}</p>
										</S.StatusTheme>
									)}
							</S.BrowseStatusThemes>
						</S.StatusContainer>
						<S.PopBrowseWrap>
							<S.PopBrowseForm id="formBrowseCard" action="#">
								<S.FormTextAreaBlock>
									<label htmlFor="textArea01" className="subttl">Описание задачи</label>
									<S.FormTextArea
										name="text"
										id="textArea01"
										readOnly={!isEditing}
										onChange={(e) => setDescription(e.target.value)}
										value={description}
									/>
								</S.FormTextAreaBlock>
							</S.PopBrowseForm>
							<Calendar onChange={(selectedDate) => setDate(selectedDate)}
								selected={date} />
						</S.PopBrowseWrap>
						<S.ButtonContainer>
							<S.ButtonGroup>
								{isEditing ? (
									<>
										<S.ButtonChangeDelete onClick={handleSaveTask} className="btn-edit__edit _btn-bg _hover01">Сохранить</S.ButtonChangeDelete>
										<S.ButtonChangeDelete onClick={handleCancelEdit} className="btn-edit__edit _btn-bor _hover03">Отменить</S.ButtonChangeDelete>
									</>
								) : (
									<>
										<S.ButtonChangeDelete onClick={handleEditTask}>Редактировать задачу</S.ButtonChangeDelete>
										<S.ButtonChangeDelete onClick={handleDeleteTask}>Удалить задачу</S.ButtonChangeDelete>
									</>
								)}
							</S.ButtonGroup>
							<S.ButtonClose>
								<S.ButtonLink to={routes.main}>Закрыть</S.ButtonLink>
							</S.ButtonClose>
						</S.ButtonContainer>
					</S.PopBrowseContent>
				</S.PopBrowseBlock>
			</S.PopBrowseContainer>
		</S.PopBrowse>
	)
}
