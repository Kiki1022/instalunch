class ApiService {

    constructor(BASE_URL){
        this.BASE_URL = BASE_URL || `http://localhost:3000`

    }
    
    async fetchPosts(){
        const req = await fetch(`${this.BASE_URL}/api/v1/posts`)
        const res = await req.json()
        return res.data 
    }

    async newPost(body){
        const req = await fetch(`${this.BASE_URL}/api/v1/posts`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const res = await req.json()
        return res 
    }

    deletePost(id){
        return fetch(`${this.BASE_URL}/api/v1/posts/${id}`, {
            method: 'DELETE'
        })
        
    }
}