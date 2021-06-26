import { useContext, useEffect } from 'react';
import styled from '@emotion/styled'

import { AuthContext } from '../context/AuthContext';

import Login from '../components/auth/Login';
import InfoSection from '../components/home/InfoSection';

const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: calc(100vh - 60px);
    background-color: var(--grey);

    @media(max-width: 850px) {
        grid-template-columns: 1fr;
    }
`

const Home = ({history}) => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if(user) history.push('todo-list')
    }, [user])

    return ( 
        <Container>
            <InfoSection />
            <Login history={history} />
        </Container>
    );
}
 
export default Home;