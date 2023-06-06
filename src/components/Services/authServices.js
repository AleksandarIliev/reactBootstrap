import { requestFactory } from './requester';

const baseUrl = `http://loclahost:3030/users`;

export const login = (loginData) => {
    return requestFactory.post(`${baseUrl}/login`, loginData);
}