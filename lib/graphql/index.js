import {request} from 'graphql-request';

export const hygraph = async (query) => {
    console.log("hygraph"); //TODO remove this
    const url = process.env.GRAPHQL_ENDPOINT;
    const token = process.env.GRAPHQL_API_KEY; 
    console.log("quering stuff from hygraph url "+url+" and query "+query+" and token "+token); //TODO remove this
    const response = await request(url, query, {
        headers: {
        'Content-Type': 'application/graphql', // why this was json?
        'Authorization': `Bearer ${token}`,
        },
    })
    .then((data) => console.log(data)) //TODO remove console.log
    .catch((err) => console.log(err)); //TODO handle error
    console.log("hygraph response "+response); //TODO remove this
    return response;
}

