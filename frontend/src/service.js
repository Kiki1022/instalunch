class ApiService {
//JOB IS TO CONNECT W API, CREATE REQUEST, FETCHURL AND WAIT FOR IT TO COMPLETE.
    constructor(BASE_URL){

        this.BASE_URL = BASE_URL || `http://localhost:3000`

    }

    // static fetchCuisines(){
    //     return fetch(`http://localhost:3000/api/v1/cuisines`)
    //     .then(res => res.json())
    //     .then(cuisines => cuisines.forEach(cuisine => {
    //         console.log(cuisine)
    //      })
        
    // }
    fetchPosts(){
        return fetch(`${this.BASE_URL}/api/v1/posts`)//endpoint
        .then(res => res.json())//CONVERTS RESPONSE TO JSON 
        .then(res => res.data)//AND RETURNS DATA FROM THERE
        }

    newPost(body){
        return fetch(`${this.BASE_URL}/api/v1/posts`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(res => res.json())//returns a promise which resolves to the response object
    }

    deletePost(id){
        return fetch(`${this.BASE_URL}/api/v1/posts/${id}`, {
            method: 'DELETE'
        })
        
    }
}