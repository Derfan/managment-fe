import { FunctionComponent, createContext, useState, useRef } from "react";

export const AuthContext = createContext({ isAuth: true, login: (token:string) => {}, logout: () => {} });

export const AuthProvider:FunctionComponent = ({ children }) => {
    const [isAuth, setIsAuth] = useState(!!window.localStorage.getItem('token'));

    const login = (token:string) => {
        window.localStorage.setItem('token', token);
        setIsAuth(true);
    };
    const logout = () => {
        window.localStorage.removeItem('token');
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};
