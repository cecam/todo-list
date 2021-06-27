import { createContext, useEffect, useState } from "react";
import axiosClient from '../config/axios'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const signIn = async (userInfo) => {
        const { data } = await axiosClient.get('/users')
        const { password, email } = data[0]

        if(password === userInfo.password && email === userInfo.email) {
            localStorage.setItem('user', JSON.stringify(data[0]))
            setUser(data[0])
            return null
        } else {
            return  'El correo o la contraseña no coinciden'
        }
    }

    const signOut = () => {
        localStorage.removeItem('user')
        setUser(null)
    }

    useEffect(() => {
        const loggedUser = localStorage.getItem('user') 
        setUser(loggedUser ? JSON.parse(loggedUser) : null)
    }, [])

    return ( 
        <AuthContext.Provider
            value={{
                user,
                signIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
 
export default AuthProvider;