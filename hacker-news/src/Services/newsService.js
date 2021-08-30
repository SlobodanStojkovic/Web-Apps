import { top10Ids } from "./idsService";



export const getHackerNews = (uniqueId) => {

    const endpoint = `https://hacker-news.firebaseio.com/v0/item/${uniqueId}.json?print=pretty`;

    return fetch(endpoint)
        .then(response => response.json())
        .then(news => news.title)
}