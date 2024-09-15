import { Link, useNavigate } from "react-router-dom"
import { routes } from "../../router/routes"

export const PopUser = (setIsAuth) => {
	const nav = useNavigate()
	const handleLogout = () => {
		setIsAuth(false)
		nav(routes.login)
	}
    return (
        <div className="pop-exit" id="popExit">
				<div className="pop-exit__container">
					<div className="pop-exit__block">
						<div className="pop-exit__ttl">
							<h2>Выйти из аккаунта?</h2>
						</div>
						<form className="pop-exit__form" id="formExit" action="#">
							<div className="pop-exit__form-group">
								<button className="pop-exit__exit-yes _hover01" id="exitYes" onClick={handleLogout}><a>Да, выйти</a> </button>
								<button className="pop-exit__exit-no _hover03" id="exitNo"><Link to={routes.main}>Нет, остаться</Link> </button>
							</div>
						</form>
					</div>
				</div>
			</div>
    )
}
