class ApiService {

    constructor(){

        this.BASE_URL =  `http://localhost:3000`

    }

    fetchPosts(){
        return fetch(`${this.BASE_URL}/api/v1/posts`)
        .then(res => res.json())
        .then(res => res.data)
        }

    newPost(body){
        return fetch(`${this.BASE_URL}/api/v1/posts`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(res => res.json())
       
    }

    deletePost(id){
        return fetch(`${this.BASE_URL}/api/v1/posts/${id}`, {
            method: 'DELETE'
        })
        
    }
}
