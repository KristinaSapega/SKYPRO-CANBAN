import { createContext, useEffect } from "react";
import { useUser } from "../hooks/useUser";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const {user, setUser, login, logout} = useUser();

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else  {
            localStorage.removeItem("user");
        } 
    }, [user]);
    return (
        <UserContext.Provider value={{user, setUser, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}
