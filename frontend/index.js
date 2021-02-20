
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
//const users_url = "http://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', () => {

    //fetchUsers()
    getPosts()
    mountFormListener()
    
    const createPostForm = document.getElementById("create-post-form")

    createPostForm.addEventListener("submit", (e) => createFormHandler(e))


})
// function fetchUsers(){
//     fetch(users_url)
//     .then(resp => resp.json())
//     .then(users => {
//         for (const user of users) {
//             let u = new User(user.id, user.name)
//             u.renderUser()
//         }
//     })
// }



function getPosts(){
    fetch(endPoint)
    .then(response => response.json())
    .then(posts =>{
        posts.data.forEach(post => {
            const postMarkup = `
            <div data-id=${post.id}>
            <h2>@${post.attributes.username}</h2>
            <img src=${post.attributes.img_src}
            height="200" width="250">
            <h2>"${post.attributes.caption}"<h2>
            <h3>Cuisine: ${post.attributes.cuisine.name}</h3>
            <h4>${post.attributes.created_at}</h4>
            <button data-id=${post.id} class="delete">delete</button>
          
            </div>
            <br><br>
            `

            document.querySelector('#post-container').innerHTML += postMarkup 
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
                //console.log(post)
                const postData = post.data
                 const postMarkup = `
                 <div data-id=${post.id}>
                 <h2>@${postData.attributes.username}</h2>
                 <img src=${postData.attributes.img_src}
                 height="200" width="250">
                 <h2>"${postData.attributes.caption}"<h2>
                 <h3>Cuisine: ${postData.attributes.cuisine.name}</h3>
                 <h4>${postData.attributes.created_at}</h4>
                 <button data-id=${post.id} class="delete">delete</button>
               
               
                </div>
                <br><br>`
                
                document.querySelector('#post-container').innerHTML +=
                postMarkup
                 
            })
    }

    function deletePostFetch(e){
        

        fetch(`http://localhost:3000/api/v1/posts/${e.target.dataset.id}`, {
            method: 'DELETE'
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(resp => resp.json())
        //.then(data => console.log(data))
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