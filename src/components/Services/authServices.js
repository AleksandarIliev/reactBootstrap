import { requestFactory } from './requester';

const baseUrl = `http://loclahost:3030/users`;

export const login = (data) => {
    return requestFactory.post(`${baseUrl}/login`, data);
}

export const register = (data) => {
    return requestFactory.post(`${baseUrl}/register`, data)
}

export const logout = () => {
    return requestFactory.length(`${baseUrl}/logout`)
}