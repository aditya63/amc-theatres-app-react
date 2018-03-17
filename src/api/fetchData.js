export default class fetchData {
    static fetchAmcApi(url) {       
        return fetch(url).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }    
}