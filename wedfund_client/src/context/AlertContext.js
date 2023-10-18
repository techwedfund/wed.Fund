import { createContext, useContext, useState } from "react";

export const AlertContext = createContext()

export const AlertProvider = ({children}) => {
    const [showAlert, setShowAlert] = useState(false)
    return(
        <AlertProvider value={{showAlert, setShowAlert}}>
            {children}
        </AlertProvider>
    )
}

export const useAlert = () => {
    return useContext(AlertContext)
}