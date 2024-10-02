

import { Calendar } from "../Calendar";
import * as S from "./popNewCard.styled"

export const PopNewCard = () => {
	
	 
    return (
        <S.PopNewCard>
				<S.PopNewCardContainer>
					<S.PopNewCardBlock>
						<S.PopNewCardContent>
							<S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
							<a href="#" className="pop-new-card__close">&#10006;</a>
							<S.PopNewCardWrap>
								<S.PopNewCardForm action="#">
									<S.FormNewBlock>
										<S.PopNewCardLabel htmlFor="formTitle" >Название задачи</S.PopNewCardLabel>
										<S.FormNewInput id="formTitle" placeholder="Введите название задачи..." autoFocus />
									</S.FormNewBlock>
									<S.FormNewBlock>
										<S.PopNewCardLabel htmlFor="textArea">Описание задачи</S.PopNewCardLabel>
										<S.FormNewArea  type="text" id="textArea"  placeholder="Введите описание задачи..." />
									</S.FormNewBlock>
								</S.PopNewCardForm>
								<S.Calendar>
									<S.CalendarTtl>Даты</S.CalendarTtl>
									<Calendar  />
									
										<div className="calendar__period">
											<p className="calendar__p date-end">
												Выберите срок исполнения <span className="date-control"></span></p>
										</div>
									</S.Calendar>
								</S.PopNewCardWrap>
							<div className="pop-new-card__categories categories">
								<p className="categories__p subttl">Категория</p>
								<div className="categories__themes">
									<div className="categories__theme _orange _active-category">
										<p className="_orange">Web Design</p>
									</div>
									<div className="categories__theme _green">
										<p className="_green">Research</p>
									</div>
									<div className="categories__theme _purple">
										<p className="_purple">Copywriting</p>
									</div>
								</div>
							</div>
							<button className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
						</S.PopNewCardContent>
					</S.PopNewCardBlock>
				</S.PopNewCardContainer>
			</S.PopNewCard>
    );
};
