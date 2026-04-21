import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("register-user")) || [])
    const [logingUser, setLogingUser] = useState(JSON.parse(localStorage.getItem("log user")))
 

    return <AuthContext.Provider value={{registerUser, setRegisterUser , logingUser, setLogingUser}}>
        {children}
    </AuthContext.Provider>
}