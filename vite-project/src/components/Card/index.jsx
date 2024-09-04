/* eslint-disable react/prop-types */
import { Calendar } from "../Calendar"

export const Card = ({themeClass, themeText, title, date, link}) => {

	const themes = {
		"Web Design": "_orange",
		"Research": "_green",
		"Copywriting": "_purple",
	}
	const theme = themes[themeText] || " ";
    return (
        <div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className={`card__theme ${theme}`}>
												<p className={themeText}>{title}</p>
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
