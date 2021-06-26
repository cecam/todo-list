import styled from "@emotion/styled";

import TasksCard from "../components/tasks/ToDo";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 60px);
    padding: 25px 50px;
    background-color: var(--grey);
`

const Tasks = () => {
    return ( 
        <Container>
            <TasksCard />
        </Container>
    );
}
 
export default Tasks;