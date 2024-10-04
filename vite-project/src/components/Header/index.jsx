import { useState } from "react"
import * as S from "./header.styled"
import { Container } from '../../global.styled.js'
import { PopBtn, PopUserSet, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "../PopUser/popUser.styled.js"
import { Link } from "react-router-dom"
import { routes } from "../../router/routes.js"
import { useUserContext } from "../../context/useUserContext.js"

export const Header = ({changeTheme, setChangeTheme}) => {
	const [isOpen, setIsOpen] = useState(false)
	const { user, setUser } = useUserContext();
	const [isModalOpen, setIsModalOpen] = useState(false);


	const toggelOpenUser = () => {
		setIsOpen(!isOpen)
	}

	const onChangeTheme = () => {
		setChangeTheme(changeTheme === "light" ? "dark" : "light")

	};

	const openModel = () => {
		setIsModalOpen(true);
	};


	const handleLogout = () => {
        setUser(null);  // Очищаем пользователя при выходе
    };


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

						
						<S.HeaderBtnMainNew to={routes.add} >
              			Создать новую задачу
						</S.HeaderBtnMainNew>
				
						<S.HeaderUser $isOpen={isOpen}onClick={toggelOpenUser}>{user.name}</S.HeaderUser>
						{isOpen &&
							<PopUserSet>
								{/* <a href="">x</a> */}
								<PopUserSetName>{user.name}</PopUserSetName>
								<PopUserSetMail>{user.email}</PopUserSetMail>
								<PopUserSetTheme>
									<p>Темная тема</p>
									<input checked={changeTheme === "dark"} onClick={onChangeTheme} type="checkbox" className="checkbox" name="checkbox" />
								</PopUserSetTheme>
								<PopBtn className="_hover03" onClick={handleLogout}><Link to={routes.exite}>Выйти</Link></PopBtn>
							</PopUserSet>
							}
					</nav>
				</S.HeaderBlock>
			</Container>
			{/* Render PopNewCard*/}
			{/* {isModalOpen && <PopNewCard onClose={() => setIsModalOpen(false)} />} */}
		</S.Header>
	)

}
