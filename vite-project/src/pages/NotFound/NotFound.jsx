import { ModalBtn, ModalFormGroup, ModalTtl } from "../../common.styled"
import { Container, Wrapper } from "../../global.styled"

export const NotFound = () => {
    return (
        <Wrapper>
        <Container>
        <ModalTtl>404</ModalTtl>
        <ModalFormGroup>К сожалению, страница, которую вы ищете, не найдена.</ModalFormGroup>
        <ModalBtn>Вернуться на главную</ModalBtn>
    </Container>
    </Wrapper>
    )
}
