import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../Contexts/AuthContext';

export const RouteGuard = () => {
    const { isAuthenticated } = AuthContext();

    if(!isAuthenticated) {
        return <Navigate to="/login" /> 
    }
    return (
        <Outlet />
    );
}