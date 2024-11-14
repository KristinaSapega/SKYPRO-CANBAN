
import { Wrapper } from "../../global.styled";
import { Modal, ModalBlock, ModalBtn, ModalForm, ModalFormGroup, ModalInput, ModalTitle } from "../../common.styled";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { useState } from "react";
import { signIn } from "../../api/user";
import { useUserContext } from "../../context/useUserContext";


export const LoginPage = () => {

	const navigate = useNavigate();
	const {login} = useUserContext();

	const [formData, setFormData] = useState({
		login: "",
		password: "",

	})

	const [error, setError] = useState("");


	const handleLogin = async (e) => {
		e.preventDefault()
		if (formData.login === "") {
			setError("Введите логин")
			return
		}
		if (formData.password === "") {
			setError("Введите пароль")
			return
		}

		try {
			const resp = await signIn(formData)
			login(resp.user);
			localStorage.setItem("user", JSON.stringify(resp))
			navigate(routes.main)
		} catch (error) {
			setError(error.message)
		}
		
	}
	return (

		<Wrapper>
			<div className="container-signin">
				<Modal>
					<ModalBlock>
						<div className="modal__ttl">
							<ModalTitle>Вход</ModalTitle>
						</div>
						<ModalForm onSubmit={handleLogin} id="formLogIn" action="#">
							<ModalInput onChange={(e) => setFormData({ ...formData, login: e.target.value })} className="modal__input" type="text" name="login" id="formlogin" placeholder="Эл. почта" />
							<ModalInput onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="modal__input" type="password" name="password" id="formpassword" placeholder="Пароль" />
							{error && <p style={{ color: 'red' }}>{error}</p>}
							<ModalBtn id="btnEnter" type="submit">Войти </ModalBtn>
							<ModalFormGroup>
								<p>Нужно зарегистрироваться?</p>
								<Link to={routes.register}>Регистрируйтесь здесь</Link>
							</ModalFormGroup>
						</ModalForm>
					</ModalBlock>
				</Modal>
			</div>
		</Wrapper>
	)
}
