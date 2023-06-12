import { createContext, useContext } from "react";
import { authServiceFactory } from '../Services/authServices';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from "../Hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth', {});
    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/')
        } catch (error) {
            console.log('There is a problem with your data. Please try again.');
        }
    }

    const onRegisterSubmit = async (values) => {
        const { rePass, ...registerData } = values;
        if (rePass !== registerData.password) {
            return;
        }
        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/allProducts');
            console.log(result);
        } catch (error) {
            console.log('Something went wrong. Please try again later.');
        }
    }

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
    }

    const contextValues = {
        onRegisterSubmit,
        onLoginSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken
    };

    return (
    <>
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    </>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}