import axious from 'axios';

const client = axious.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const fetchData = async (endpoint) => {
    try {
        const response = await client.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }
};

export const apiService = {
    fetchData
};