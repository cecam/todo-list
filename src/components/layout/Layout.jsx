import { useContext } from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

import {AuthContext} from '../../context/AuthContext'
import {AlertContext} from '../../context/AlertContext'

import Alert from '../alerts/Alert'

const Nav = styled.nav`
    display: grid;
    grid-template-areas: "title text button";
    grid-template-columns: 150px 1fr 150px;
    align-items: center;
    height: 60px;
    padding: 0 25px;
    color: var(--white);
    background-color: var(--darkBlue);

    .title {
        grid-area: title;
        font-size: 30px;
        text-align: center;
    }

    .text {
        grid-area: text;
        padding-left: 25px;
        font-size: 20px;

    }

    button {
        grid-area: button;
        padding: 5px 10px;
        background-color: transparent;
        color: var(--white);
        border: solid 1px var(--grey);
        cursor: pointer;
        width: 100%;
    }

    @media (max-width: 850px) {
        height: 100px;
        grid-template-areas:"title title"
                            "text button";
        grid-template-columns: 1fr 100px;
    }
`

const Layout = ({children}) => {
    const { user, signOut } = useContext(AuthContext)
    const { showAlert } = useContext(AlertContext)
    return ( 
        <>
            <Global 
                styles={css`
                    :root {
                        --darkBlue: #222831;
                        --grey: #dddddd;
                        --blue: #00adb5;
                        --white: #eeeeee;
                    }
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body {
                        background-color: var(----white);
                        min-height: 100vh;
                    }
                    h1, h2, h3, button {
                        font-family: 'PT Sans', sans-serif;
                    }
                    p, a, ul, input, label, div {
                        font-family: 'Ubuntu', sans-serif;
                    }
                `}
            />
            <Nav>
                <h2 className="title">ToDo App</h2>
                {user &&
                    <p className="text">Bienvenido {user.nickname}!</p>
                }
                {user && 
                    <button onClick={signOut}>
                        Cerrar sesi??n
                    </button>
            
                }
            </Nav>
            {children}
            {
                showAlert && <Alert />
            }
        </>
    );
}
 
export default Layout;