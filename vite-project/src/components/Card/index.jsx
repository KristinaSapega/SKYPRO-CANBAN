import { Link } from "react-router-dom"
import * as S from "./card.styled"
import { format } from "date-fns"

export const Card = ({ topic, title, date, link, _id}) => {

	const formattedDate = format(new Date(date), 'dd.MM.yy');

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
												<p> {topic} </p>
											</S.CardTheme>
											<Link to={`/card/${_id}`}>
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
											<S.CardDateText>{formattedDate}</S.CardDateText>
										</S.CardContent>
									</S.Card>
								</S.CardsItem>
        
    )
}
