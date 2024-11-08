import { Column } from "../Column";
import { statusList } from "../../data";
import * as S from "./main.styled"
import { Container } from "../../global.styled";


export const Main = ({tasks}) => {

    return (
        <S.Main>
			<Container>
				
				<S.MainBlock>
					<S.MainContent>
						{statusList.map ((status, index)=> (
							<Column 
							key={index}
							title={status}
							tasks={tasks.filter((task)=> task.status === status)}/>
						))}
					</S.MainContent>
				
				</S.MainBlock>
			</Container>
		</S.Main>
    )
}
