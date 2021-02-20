// class Post {
//     static allPosts = []
//     constructor(post){
//         this.id = post.id
//         this.img_src = post.img_src
//         this.caption = post.caption

//         Post.allPosts.push(this)
//     }

//     static generatePosts(){
//         const postsData = apiService.fetchPosts()
//             .then(data => {
//                 data.forEach(post => {
//                     const newPost = new Post(post)
//                 })
            
//             })
//     }

//      createPost(){
//         let lunchPost = document.getElementById("lunch-form")

//         lunchPost.innerHTML +=
//         `
//         <form>
//         <p>Caption: <input type="text" id="caption" placeholder="Describe It"><p>
//         <input type="submit" value="Submit">
        
        
//         </form>

//         `
//         //lunchPost.addEventListener("submit", userFormSubmission)
//     }
// }

