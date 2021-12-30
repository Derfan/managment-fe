import { FunctionComponent, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({ isAuth: true, login: (token:string) => {}, logout: () => {} });

export const AuthProvider:FunctionComponent = ({ children }) => {
    const [isAuth, setIsAuth] = useState(!!window.localStorage.getItem('token'));
    const navigate = useNavigate();

    const login = (token:string) => {
        window.localStorage.setItem('token', token);
        setIsAuth(true);
    };
    const logout = () => {
        window.localStorage.removeItem('token');
        setIsAuth(false);
        navigate('/sign-in');
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};
