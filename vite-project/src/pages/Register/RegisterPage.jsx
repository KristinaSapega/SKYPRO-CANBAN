import { Wrapper } from "../../global.styled"
import { Modal, ModalBlock, ModalBtn, ModalForm, ModalFormGroup, ModalInput, ModalTitle } from "../../common.styled";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { useState } from "react";
import { signUp } from "../../api/user";


export const RegisterPage = ({setUser}) => {
	const navigate = useNavigate()	

	const [signUpData, setSignUpData] = useState ({
		login:"",
		name:"",
		password:"",
	})

	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false); //для отображения сообщения об успешной регистрации 
	
		

	const handleRegistration = (e) => {
        e.preventDefault()

		if (!signUpData.login || !signUpData.password || !signUpData.name) {
            setError ("Введите данные")
            return
        }

		signUp(signUpData)
		.then(() => {
			setSuccess(true);
			navigate(routes.main)
		})
		.catch((error) => {
			console.log(error.message)
			setError(error.message)
		})
}
	

    return (
        <Wrapper>
        <div className="container-signup">
            <Modal>
				<ModalBlock>
					<div className="modal__ttl">
						<ModalTitle>Регистрация</ModalTitle>
					</div>
					<ModalForm id="formLogUp" onSubmit={handleRegistration}>
						<ModalInput 
						onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value, })}
						type="text" 
						name="name" 
						id="first-name" 
						placeholder="Имя" 
						required
						/>
						<ModalInput 
						onChange={(e) => setSignUpData({ ...signUpData, login: e.target.value })}
						type="text" 
						name="login" 
						id="loginReg" 
						placeholder="Эл. почта"
						required
						/>
						<ModalInput 
						onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
						type="password" 
						name="password" 
						id="passwordFirst" 
						placeholder="Пароль" 
						required
						/>
						<ModalBtn type="submit" id="SignUpEnter" >
							Зарегистрироваться {''}</ModalBtn>
							{error && <p style={{ color: 'red' }}>{error}</p>} 
                            {success && <p style={{ color: 'green' }}>Регистрация успешна!</p>} 
						<ModalFormGroup>
							<p>Уже есть аккаунт?  <Link to={routes.login}>Войдите здесь</Link></p>
						</ModalFormGroup>
					</ModalForm>
				</ModalBlock>
			</Modal>
        </div>
    </Wrapper>
    )
}
