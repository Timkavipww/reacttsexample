import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

export const AuthContext = createContext<IContext>({
    isLoggedIn: false,
    setIsLoggedIn: () => {}
    }) 

export interface IContext {
    isLoggedIn: boolean,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>> 
}

export const AuthProvider = ({children} : PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
    <AuthContext.Provider value={{
        isLoggedIn,
        setIsLoggedIn
    }}>
        {children}
    </AuthContext.Provider>
    )
        
}