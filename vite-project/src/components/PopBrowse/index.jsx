import { Link, useParams } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./popBrowse.styled";

export const PopBrowse = () => {
	const {_id} = useParams()
	// console.log(params.id)
    return (
        <S.PopBrowse>
				<S.PopBrowseContainer>
					<S.PopBrowseBlock>
						<S.PopBrowseContent>
							<S.PopBrowseTopBlock>
								<S.PopBrowseTtl>Название задачи {_id} </S.PopBrowseTtl>
								<S.CategoriesTheme className="theme-top _orange _active-category">
									<p className="_orange">Web Design </p>
								</S.CategoriesTheme>
							</S.PopBrowseTopBlock>
							<div className="pop-browse__status status">
								<S.BrowseStatusP>Статус</S.BrowseStatusP>
								<S.BrowseStatusThemes>
									<div className="status__theme _hide">
										<p>Без статуса</p>
									</div>
									<div className="status__theme _gray">
										<p className="_gray">Нужно сделать</p>
									</div>
									<div className="status__theme _hide">
										<p>В работе</p>
									</div>
									<div className="status__theme _hide">
										<p>Тестирование</p>
									</div>
									<div className="status__theme _hide">
										<p>Готово</p>
									</div>
								</S.BrowseStatusThemes>
							</div>
							<S.PopBrowseWrap>
								<S.PopBrowseForm id="formBrowseCard" action="#">									
									<S.FormTextAreaBlock>
										<label htmlFor="textArea01" className="subttl">Описание задачи</label>
										<S.FormTextArea 
										name="text" 
										id="textArea01"  
										readOnly 
										placeholder="Введите описание задачи..."
										/>
									</S.FormTextAreaBlock>
								</S.PopBrowseForm>
								<Calendar onChange={setDate} selected={date}  />
							</S.PopBrowseWrap>
							<div className="theme-down__categories theme-down">
								<p className="categories__p subttl">Категория</p>
								<div className="categories__theme _orange _active-category">
									<p className="_orange">Web Design</p>
								</div>
							</div>
							<div className="pop-browse__btn-browse ">
								<div className="btn-group">
									<button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать задачу</a></button>
									<button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a></button>
								</div>
								<button className="btn-browse__close _btn-bg _hover01"><Link to={routes.main}>Закрыть</Link></button>
							</div>
							<div className="pop-browse__btn-edit _hide">
								<div className="btn-group">
									<button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
									<button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
									<button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
								</div>
								<button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
							</div>
													
						</S.PopBrowseContent>
					</S.PopBrowseBlock>
				</S.PopBrowseContainer>
			</S.PopBrowse>
    )
}
