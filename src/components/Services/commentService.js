import { requestFactory } from './requester';

const baseUrl = 'jttp://localhost:3000/http://localhost:3000/productData.json/comments'
const request = requestFactory();

export const getAll = async (id) => {
    const query = encodeURIComponent(`id="${id}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    const comment = Object.values(result);
    return comment;
}

export const create = async(id, comment) => {
    const result = await request.post(baseUrl, {id, comment});

    return result;
}