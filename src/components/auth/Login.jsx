import { useContext, useState } from "react";

import { AuthContext } from '../../context/AuthContext'

import { LoginSection, LoginForm, InputArea } from "./AuthStyles";

const Login = ({history}) => {
    const { signIn } = useContext(AuthContext)
    const [ userInfo, setUserInfo ] = useState({
        email: '',
        password: ''
    })
    const { email, password } = userInfo

    const handlerInput = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        })
    }

    const handlerSubmit = async e => {
        e.preventDefault()

        const response = await signIn(userInfo)
        if(!response) history.push('todo-list')
    }

    return ( 
        <LoginSection onSubmit={ handlerSubmit }>
            <h1>Iniciar sesión</h1>
            <LoginForm>
                <InputArea>
                    <label>Correo electrónico</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Ej. ejemplo@email.com"
                        onChange={ handlerInput }
                        value={ email }
                    />
                </InputArea>
                <InputArea>
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="******"
                        onChange={ handlerInput }
                        value={ password }
                    />
                </InputArea>
                <button type="submit">
                    Login
                </button>
            </LoginForm>
        </LoginSection>
    );
}
 
export default Login;