class PostList {
    constructor(posts = [], container){//purpose having oojs class contructors is to have prototype objects in the frontend. so you don't have ask for objects from backend
        this.posts = posts 
        this.container = container 
        this.all = posts    
    }
    
    static async create(container){ 
        const API = new ApiService()
        const res = await API.fetchPosts() 
        const posts = res.map(post => new Post(post, post.attributes)) //are we creating a new post??
        return new PostList(posts, container) //ask grace whats going on here
    }

    async newPost(){
        //e.preventDefault()//prevent default rerouting
        //debugger
        const username = document.querySelector('#input-name').value
        const caption = document.querySelector('#input-caption').value
        const img_src = document.getElementById("img-src").value
        const cuisineInput = document.querySelector('#cuisine')
        const cuisine_id = parseInt(cuisineInput.value)//converts string to integer
        const cuisineName = cuisineInput.options[cuisineInput.selectedIndex].textContent
        const postForm = document.querySelector("#post-form")
        const API = new ApiService()   
        const post = await API.newPost({username, caption, img_src, cuisine_id})//wait to create a new post on server, second.then this returns promise which results to parsing the body

        this.add(post, {name: cuisineName})//this is PostList class
        postForm.reset()
    }

    add(post, cuisine){
        const newPost = new Post(post, {cuisine}) //why is this in curly brackets?
        this.all.unshift(newPost)//telling it what to do with argument, making sure to put newPost at beginning of array
        this.render()
    }

  
    render(){     
        this.posts.forEach( post => this.container.innerHTML += post.renderPostCard())
    }

    async delete(id){
        const API = new ApiService()
        await API.deletePost(id)
        this.posts = this.posts.filter(post => post.id !== id) //if post id matches id it will filter it out

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