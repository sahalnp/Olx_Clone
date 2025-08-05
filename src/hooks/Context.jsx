import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = localStorage.getItem("isAuth");
        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");

        if (auth === "true" && name && email && password) {
            setUser({ 
                auth: true, // Convert string to boolean
                name, 
                email, 
                password 
            }); 
        } else {
            setUser(null);
        }
        setLoading(false);
    }, []); 

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);