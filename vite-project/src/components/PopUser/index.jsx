import { Link, useNavigate } from "react-router-dom"
import { routes } from "../../router/routes"
import { PopExit, PopExitBlog, PopExitButtonNo, PopExitButtonYes, PopExitContainer, PopExitFormGroup, PopExitTitle } from "./popUser.styled"
import { useUserContext } from "../../context/useUserContext"

export const PopUser = () => {
	const { logout } = useUserContext();
	const nav = useNavigate();

	const handleLogout = () => {
		logout(); 
		nav(routes.login);
	};

    return (
        <PopExit id="popExit">
				<PopExitContainer>
					<PopExitBlog>
							<PopExitTitle>Выйти из аккаунта?</PopExitTitle>
						<form className="pop-exit__form" id="formExit" action="#">
							<PopExitFormGroup>
								<PopExitButtonYes id="exitYes" onClick={handleLogout}><a>Да, выйти</a> </PopExitButtonYes>
								<PopExitButtonNo id="exitNo"><Link to={routes.main}>Нет, остаться</Link> </PopExitButtonNo>
							</PopExitFormGroup>
						</form>
					</PopExitBlog>
				</PopExitContainer>
			</PopExit>
    )
}
