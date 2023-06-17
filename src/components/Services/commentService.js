import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3000/productData.json/comments'
const request = requestFactory();

export const getAll = async (id) => {
    const serchedQuery = encodeURIComponent(`id="${id}"`);
    const relationQuery = encodeURIComponent(`author=_id:users`);
    const result = await request.get(`${baseUrl}?where=${serchedQuery}&load=${relationQuery}`);
    const comments = Object.values(result);
    return comments;
}

export const create = async(id, comment) => {
    const result = await request.post(baseUrl, {id, comment});

    return result;
}