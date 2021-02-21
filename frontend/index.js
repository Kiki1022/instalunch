const endPoint = "http://localhost:3000/api/v1/posts"

document.addEventListener('DOMContentLoaded', () => {

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
           //debugger
            let newPost = new Post(post, post.attributes)
            
            document.querySelector('#post-container').innerHTML += newPost.renderPostCard()
            //render(post)
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
                render(post.data)
            })
    }

    function deletePostFetch(e){
        
        fetch(`http://localhost:3000/api/v1/posts/${e.target.dataset.id}`, {
            method: 'DELETE'
     
        })
    }
    function mountFormListener(){
        document.querySelector('#post-container').addEventListener('click', function(e){
            console.log("CLICKED")
           
          //const id = e.target.parentElement.id
          deletePostFetch(e)
          e.target.parentElement.remove() //updates dom by removing parent element
        })
    }