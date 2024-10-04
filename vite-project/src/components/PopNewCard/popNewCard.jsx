import { useState } from "react";
import { Calendar } from "../Calendar";
import * as S from "./popNewCard.styled"
import { routes } from "../../router/routes";
import { Link } from "react-router-dom";
import { useTasksContext } from "../../context/useTasksContext";

export const PopNewCard = () => {
	const [date, setDate] = useState(null);
	
	const {tasks, setTasks} = useTasksContext();

	const addTask = () => {
        const newTask = {
            id: tasks.length + 1,
            topic: "Web Design",
            title: "Новая задача",
            date: new Date(),
            status: "Без статуса",
        }
        setTasks([...tasks, newTask])
    }
	 
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
										<S.FormNewInput id="formTitle" placeholder="Введите название задачи..." autoFocus />
									</S.FormNewBlock>
									<S.FormNewBlock>
										<S.PopNewCardLabel htmlFor="textArea">Описание задачи</S.PopNewCardLabel>
										<S.FormNewArea id="textArea"  placeholder="Введите описание задачи..." />
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
									<div className="categories__theme _orange _active-category">
										<p className="_orange">Web Design</p>
									</div>
									<div className="categories__theme _green">
										<p className="_green">Research</p>
									</div>
									<div className="categories__theme _purple">
										<p className="_purple">Copywriting</p>
									</div>
								</S.CategoriesThemes>
							</S.PopNewCardCategories>
							<button className="form-new__create _hover01" id="btnCreate" onClick={addTask}>Создать задачу</button>
						</S.PopNewCardContent>
					</S.PopNewCardBlock>
				</S.PopNewCardContainer>
			</S.PopNewCard>
    );
};
