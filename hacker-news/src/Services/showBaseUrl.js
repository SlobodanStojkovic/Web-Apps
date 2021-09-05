export const showBaseUrl = (url) => {
    let pathArray = url.split('/');
    let protocol = pathArray[0];
    let host = pathArray[2];
    let baseUrl = protocol + '//' + host;
    return baseUrl
}