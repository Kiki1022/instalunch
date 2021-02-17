
// window.addEventListener("load", function()
// {
  
//     //1. render user form
//     const {render, root, createPost} = views() //destructuring objects. pulling an object key out of they oject and saving into a new variable
    
//     const controllers = {
//         getUserName: function(e){
//             e.preventDefault()
//             const name = e.target.querySelector("input").value
//             render(createPost(name))
//         }
     
//     }
    
//     //2. add event listener for submit

//     root.querySelector("form").addEventListener("submit", controllers.getUserName )
 

// })

const endPoint = "http://localhost:3000/api/v1/posts"

document.addEventListener('DOMContentLoaded', () => {
    getPosts()

    const createPostForm = document.getElementById("create-post-form")

    createPostForm.addEventListener("submit", (e) => createFormHandler(e))


})


function getPosts(){
    fetch(endPoint)
    .then(response => response.json())
    .then(posts =>{
        posts.data.forEach(post => {
            const postMarkup = `
            <div data-id=${post.id}>
            <h3>@${post.attributes.user.name}</h3>
            <img src=${post.attributes.img_src}
            height="200" width="250">
            <h3>"${post.attributes.caption}"<h3>
            <h5>${post.attributes.created_at}</h5>
          
            </div>
            <br><br>
            `

            document.querySelector('#post-container').innerHTML += postMarkup 
        })
    })
    
   
    }
    function createFormHandler(e) {
        e.preventDefault()
        const userNameInput = document.querySelector('#input-name').value
        const captionInput = document.querySelector('#input-caption').value
        const imageInput = document.getElementById("img-src").value
        postFetch(userNameInput, captionInput, imageInput)
    }

    function postFetch(userName, caption, image){
        console.log(userName, caption, image)
    }