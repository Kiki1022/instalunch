
class Post {
   
    constructor(post, postAttributes = {}){
      
        this.id = post.id

        this.username = postAttributes.username || post.username
        this.img_src = postAttributes.img_src || post.img_src
        this.caption = postAttributes.caption || post.caption
        this.cuisine = postAttributes.cuisine || post.cuisine
        this.created_at = postAttributes.created_at || post.created_at

        Post.all.unshift(this)
     
    }

    renderPostCard() {
        return `
            <div data-id=${this.id}>
                <h2>@${this.username}</h2>
                <img src=${this.img_src}
                height="200" width="250">
                <h2>"${this.caption}"<h2>
                <h3>Cuisine: ${this.cuisine?.name}</h3>
                <h4>${this.created_at}</h4>
                <button data-id=${this.id} id="delete-button" class="delete">delete</button>
            </div>
        <br><br>
        `
       
    }
}
Post.all = []


