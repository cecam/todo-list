import { useContext, useEffect } from 'react';
import styled from '@emotion/styled'

import { AuthContext } from '../context/AuthContext';

import Login from '../components/auth/Login';
import InfoSection from '../components/home/InfoSection';

const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: calc(100vh - 60px);
    background: rgb(238,238,238);
    background: radial-gradient(circle at 85vw 55vh, rgba(238,238,238,1) 0%, #178186 100%);

    @media(max-width: 850px) {
        grid-template-columns: 1fr;
        background: radial-gradient(circle at 50vw 80vh, rgba(238,238,238,1) 0%, #178186 60%);
    }
`

const Home = ({history}) => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if(user) history.push('todo-list')
         // eslint-disable-next-line
    }, [user])

    return ( 
        <Container>
            <InfoSection />
            <Login history={history} />
        </Container>
    );
}
 
export default Home;