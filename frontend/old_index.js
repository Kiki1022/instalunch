const endPoint = "http://localhost:3000/api/v1/posts"

document.addEventListener('DOMContentLoaded', async () => {
    getPosts()
    mountFormListener()
    
    const createPostForm = document.getElementById("create-post-form")

    createPostForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getPosts(){
    fetch(endPoint)
    .then(response => response.json())
    .then(posts =>{
        posts.data.forEach(post => {

            let newPost = new Post(post, post.attributes)
            
            document.querySelector('#post-container').innerHTML += newPost.renderPostCard()
            
        })
    })
}
    
    function createFormHandler(e) {
        console.log("form submitted")
        e.preventDefault()
        const userNameInput = document.querySelector('#input-name').value
        const captionInput = document.querySelector('#input-caption').value
        const imageInput = document.getElementById("img-src").value
        const cuisineInput = document.querySelector('#cuisine').value
        const cuisineId = parseInt(cuisineInput)
        postFetch(userNameInput, captionInput, imageInput, cuisineId)
    }

    function postFetch(username, caption, img_src, cuisine_id){
        const bodyData = {username, caption, img_src, cuisine_id}
        
        fetch(endPoint, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyData)
        })
            .then(response => response.json())
            .then(post => {
                // const postData = post.data
                // let newPost = new Post(postData, postData.attributes)
                // document.querySelector('#post-container').innerHTML += newPost.renderPostCard()
                
                //const postData = post
                console.log(post)
                let newPost = new Post(post)
            
                document.querySelector('#post-container').insertAdjacentHTML("afterBegin", newPost.renderPostCard()) 
            })
    }

    function deletePostFetch(e){
        
        fetch(`http://localhost:3000/api/v1/posts/${e.target.dataset.id}`, {
            method: 'DELETE'
     
        })
    }
    function mountFormListener(){
        document.querySelector('#post-container').addEventListener('click', function(e){
            if (e.target.className === "delete"){
          deletePostFetch(e)
          e.target.parentElement.remove() 
         }
        })
    
    }