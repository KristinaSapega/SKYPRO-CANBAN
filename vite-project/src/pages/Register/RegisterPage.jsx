import { Wrapper } from "../../global.styled"
import { Modal, ModalBlock, ModalBtn, ModalForm, ModalFormGroup, ModalInput, ModalTitle } from "../../common.styled";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";

export const RegisterPage = () => {
    return (
        <Wrapper>
        <div className="container-signup">
            <Modal>
				<ModalBlock>
					<div className="modal__ttl">
						<ModalTitle>Регистрация</ModalTitle>
					</div>
					<ModalForm id="formLogUp" action="#">
						<ModalInput type="text" name="first-name" id="first-name" placeholder="Имя" />
						<ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта" />
						<ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль" />
						<ModalBtn id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a> </ModalBtn>
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
