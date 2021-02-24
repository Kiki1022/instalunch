class PostList {
    constructor(posts = [], container){
        this.posts = posts 
        this.container = container 
    }
    
    add(post, cuisine){
        this.posts.unshift(new Post(post, {cuisine}))
        this.container.insertAdjacentHTML("afterbegin", this.posts[0].renderPostCard())
        
    }

    async delete(id){
        const API = new ApiService()
        await API.deletePost(id)
        this.posts = this.posts.filter(post => post.id !== id) //if post id matches id it will filter it out

    }

    render(){
        this.posts.forEach(post => this.container.innerHTML += post.renderPostCard())

    }

    mount(){
        this.container.addEventListener('click', (e)=>{
            if (e.target.className === "delete"){
                const id = e.target.dataset.id
                this.delete(id)
                e.target.parentElement.remove() 
            }
        })
    } 

    static async get(selector){
        const API = new ApiService()
        const res = await API.fetchPosts()
        const posts = res.map(post => new Post(post, post.attributes)) 
        return new PostList(posts, document.querySelector(selector))
    }
}