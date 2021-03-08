class PostList {
    constructor(posts = [], container){
        this.posts = posts 
        this.container = container 
        this.all = posts    
    }
    
    static async create(container){ 
        const API = new ApiService()
        const res = await API.fetchPosts() 
        const posts = res.map(post => new Post(post, post.attributes)) 
        return new PostList(posts, container) 
    }

    async newPost(e){
        e.preventDefault()
        const username = document.querySelector('#input-name').value
        const caption = document.querySelector('#input-caption').value
        const img_src = document.getElementById("img-src").value
        const cuisineInput = document.querySelector('#cuisine')
        const cuisine_id = parseInt(cuisineInput.value)
        const cuisineName = cuisineInput.options[cuisineInput.selectedIndex].textContent
        const postForm = document.querySelector("#post-form")
        const API = new ApiService()   
        const post = await API.newPost({username, caption, img_src, cuisine_id})//wait to create a new post on server
    
        this.add(post, {name: cuisineName})
        postForm.reset()
    }

    add(post, cuisine){
        const newPost = new Post(post, {cuisine}) 
        this.all.unshift(newPost)
        this.render()
    }

  
    render(){     
        this.container.innerHTML = "" 
        this.posts.forEach( post => this.container.innerHTML += post.renderPostCard())

    }

    async delete(id){
        const API = new ApiService()
        await API.deletePost(id)
        this.posts = this.posts.filter(post => post.id !== id) 

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
}