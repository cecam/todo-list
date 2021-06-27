import { createContext, useState } from "react";

export const AlertContext = createContext()

const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    const displayAlert = (message) => {
        setAlert(message)
        setShowAlert(true)
        setTimeout(() => {
            setAlert('')
            setShowAlert(false)
        }, 3500)
    }

    return ( 
        <AlertContext.Provider
            value={{
                alert,
                showAlert,
                displayAlert
            }}
        >
            {children}
        </AlertContext.Provider>
    );
}
 
export default AlertProvider;