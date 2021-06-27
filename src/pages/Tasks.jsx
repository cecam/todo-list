import styled from "@emotion/styled";

import ToDo from "../components/tasks/ToDo";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 60px);
    background-color: var(--grey);

    @media (max-width: 850px) {
        height: calc(100vh - 100px);
    }
`

const Tasks = () => {
    return ( 
        <Container>
            <ToDo />
        </Container>
    );
}
 
export default Tasks;