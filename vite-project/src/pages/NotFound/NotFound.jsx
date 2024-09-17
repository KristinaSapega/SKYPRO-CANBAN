import { Link } from "react-router-dom"
import { ModalBtn, ModalFormGroup, ModalTtl } from "../../common.styled"
import { Container, Wrapper } from "../../global.styled"
import { routes } from "../../router/routes"

export const NotFound = () => {
    return (
        <Wrapper>
        <Container>
        <ModalTtl>404</ModalTtl>
        <ModalFormGroup>К сожалению, страница, которую вы ищете, не найдена.</ModalFormGroup>
        <ModalBtn><Link to={routes.main}> Вернуться на главную</Link></ModalBtn>
    </Container>
    </Wrapper>
    )
}
