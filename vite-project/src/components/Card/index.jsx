import { Calendar } from "../Calendar"

// eslint-disable-next-line react/prop-types
export const Card = ({themeClass, themeText, title, date, link}) => {
    return (
        <div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className={`card__theme ${themeClass}`}>
												<p className={themeClass}>{themeText}</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href={link} target="_blank">
												<h3 className="card__title">{title}</h3>
											</a>
											<Calendar date={date}/>
										</div>
									</div>
								</div>
        
    )
}
