const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

export const getDataFromApi = () => {
    return fetch(apiEndpoint)
        .then(response => {
            console.log(response)
            return response.json()
        })

        .then(data => {
            console.log(data)
            return data;
        })
}


export const getSingleBlog = (id) => {
    return fetch(`${apiEndpoint}/${id}`)
        .then(response => {
            return response.json()
        })
        .then(myResponse => {
            return {
                title: myResponse.title,
                body: myResponse.body,
                id: myResponse.id
            }
        })
}
