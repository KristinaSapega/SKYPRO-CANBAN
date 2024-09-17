import { useState } from "react"
import * as S from "./header.styled"
import { Container } from '../../global.styled.js'
import { PopBtn, PopUserSet, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "../PopUser/popUser.styled.js"
import { Link } from "react-router-dom"
import { routes } from "../../router/routes.js"

export const Header = ({addCard, changeTheme, setChangeTheme}) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggelOpenUser = () => {
		setIsOpen(!isOpen)
	}

	const onChangeTheme = () => {
		setChangeTheme(changeTheme === "light" ? "dark" : "light")

	}	
	//console.log(isOpen)
	return (
		<S.Header>
			<Container>
				<S.HeaderBlock>
					<div className="header__logo">
						<a href="" target="_self">
							<img 
							src={changeTheme === "light" ? "images/logo.png" : "images/logo_dark.png"}
							alt="logo"
							/>
						</a>
					</div>
					<nav className="header__nav">
						<S.HeaderBtnMainNew onClick={addCard} id="btnMainNew"><a>Создать новую задачу</a></S.HeaderBtnMainNew>
						<S.HeaderUser $isOpen={isOpen}onClick={toggelOpenUser}>Ivan Ivanov</S.HeaderUser>
						{isOpen &&
							<PopUserSet>
								{/* <a href="">x</a> */}
								<PopUserSetName>Ivan Ivanov</PopUserSetName>
								<PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
								<PopUserSetTheme>
									<p>Темная тема</p>
									<input checked={changeTheme === "dark"} onClick={onChangeTheme} type="checkbox" className="checkbox" name="checkbox" />
								</PopUserSetTheme>
								<PopBtn className="_hover03"><Link to={routes.exite}>Выйти</Link></PopBtn>
							</PopUserSet>
							}
					</nav>
				</S.HeaderBlock>
			</Container>
		</S.Header>
	)

}
