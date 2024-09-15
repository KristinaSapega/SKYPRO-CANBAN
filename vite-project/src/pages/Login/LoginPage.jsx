//import "./login.css"
import { Wrapper } from "../../global.styled";
import { Modal, ModalBlock, ModalBtn, ModalForm, ModalFormGroup, ModalInput, ModalTitle } from "../../common.styled";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";


export const LoginPage = ({setIsAuth}) => {
	
	const navigate = useNavigate()

	const handleLogin = (e) => {
		e.preventDefault()
		setIsAuth (true)
		navigate (routes.main)
	}
    return (
       
    <Wrapper>
        <div className="container-signin">
            <Modal>
				<ModalBlock>
					<div className="modal__ttl">
						<ModalTitle>Вход</ModalTitle>
					</div>
					<ModalForm id="formLogIn" action="#">
						<ModalInput className="modal__input" type="text" name="login" id="formlogin" placeholder="Эл. почта" />
						<ModalInput className="modal__input" type="password" name="password" id="formpassword" placeholder="Пароль" />
						<ModalBtn onClick={handleLogin} id="btnEnter">Войти </ModalBtn>
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
