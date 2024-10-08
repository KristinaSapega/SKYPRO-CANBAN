import { Column } from "../Column";
import { statusList } from "../../data";
import * as S from "./main.styled"
import { Container } from "../../global.styled";


export const Main = ({tasks}) => {

    return (
        <S.Main>
			<Container>
				
				<div className="main__block">
					<div className="main__content">
						{statusList.map ((status, index)=> (
							<Column 
							key={index}
							title={status}
							tasks={tasks.filter((task)=> task.status === status)}/>
						))}
					</div>
				
				</div>
			</Container>
		</S.Main>
    )
}
