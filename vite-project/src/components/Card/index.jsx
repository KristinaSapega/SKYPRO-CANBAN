import { Calendar } from "../Calendar"
import * as S from "./card.styled"

export const Card = ({themeText, title, date, link}) => {

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
											<S.CardTheme $color={themeText}>
												<p className={themeText}>{themeText}</p>
											</S.CardTheme>
											<a href="#popBrowse" target="_self">
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
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
