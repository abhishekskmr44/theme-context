import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    const dark = () => {
        setIsDark(true);
    }
    const light = () => {
        setIsDark(false);
    }
    return (
        <AuthContext.Provider 
            value={{ isDark, dark, light }}
        >
            {children}
        </AuthContext.Provider>
    )
};