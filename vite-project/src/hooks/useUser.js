import { useState } from "react";

const getUserFromLocalStorage = () => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        return user || null; 
    } catch {
        return null;
    }
};

export const useUser = () => {
    const [user, setUser] = useState(getUserFromLocalStorage());

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return {user, login, logout, setUser};
};
