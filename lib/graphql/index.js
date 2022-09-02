import {request} from 'graphql-request';

export const hygraph = async (query) => {
    const url = process.env.GRAPHQL_ENDPOINT;
    const token = process.env.GRAPHQL_API_KEY; 
    const response = await request(url, query, {
        headers: {
        'Content-Type': 'application/graphql', // why this was json?
        'Authorization': `Bearer ${token}`,
        },
    })
    .then((data) => console.log(data)) //TODO remove console.log
    .catch((err) => console.log(err)); //TODO handle error
    return response;
}

