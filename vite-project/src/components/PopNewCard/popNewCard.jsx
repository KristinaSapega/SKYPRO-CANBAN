import { useState } from "react"
import { Calendar } from "../Calendar";

export const PopNewCard = () => {
	const [selectDate, setSelectDate] = useState(null);
	 const handleDateSelect = (date) => {
		setSelectDate(date);
	 }
    return (
        <div className="pop-new-card" id="popNewCard">
				<div className="pop-new-card__container">
					<div className="pop-new-card__block">
						<div className="pop-new-card__content">
							<h3 className="pop-new-card__ttl">Создание задачи</h3>
							<a href="#" className="pop-new-card__close">&#10006;</a>
							<div className="pop-new-card__wrap">
								<form className="pop-new-card__form form-new" id="formNewCard" action="#">
									<div className="form-new__block">
										<label htmlFor="formTitle" className="subttl">Название задачи</label>
										<input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
									</div>
									<div className="form-new__block">
										<label htmlFor="textArea" className="subttl">Описание задачи</label>
										<textarea className="form-new__area" name="text" id="textArea"  placeholder="Введите описание задачи..."></textarea>
									</div>
								</form>
								<div className="pop-new-card__calendar calendar">
									<Calendar onDateSelect={handleDateSelect} />
									<input 
									type="hidden"
									id="datepick_value"
                                    value={selectDate ? selectDate.toLocaleDateString("ru-RU") : ""}
                                />
										<div className="calendar__period">
											<p className="calendar__p date-end">
												Выберите срок исполнения <span className="date-control">{selectDate ? selectDate.toLocaleDateString("ru-RU") : "Не выбрана"}</span>.</p>
										</div>
									</div>
								</div>
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
						</div>
					</div>
				</div>
			</div>
    );
};
