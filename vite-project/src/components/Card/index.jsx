import { Link } from "react-router-dom"
import { Calendar } from "../Calendar"
import * as S from "./card.styled"

export const Card = ({topic, title, date, link, id}) => {

	// const themes = {
	// 	"Web Design": "_orange",
	// 	"Research": "_green",
	// 	"Copywriting": "_purple",
	// }
	// const theme = themes[themeText] || " ";
    return (
        <S.CardsItem>
									<S.Card>
										<S.CardGroup>
											<S.CardTheme $color={topic}>
												<p className={topic}>{topic}</p>
											</S.CardTheme>
											<Link to={`/card/${id}`}>
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</Link>
										</S.CardGroup>
										<S.CardContent>
											<a href={link} target="_blank">
												<S.CardTitle>{title}</S.CardTitle>
											</a>
											<Calendar date={date}/>
										</S.CardContent>
									</S.Card>
								</S.CardsItem>
        
    )
}
