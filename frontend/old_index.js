const apiService = new ApiService()

document.addEventListener("DOMContentLoaded", () =>{
     createFormI()
     fetchUsers()
    Post.generatePosts()
    createPost()
})  

const render = (html) => {
    
}

const BASE_URL = "http://localhost:3000"
    //read
    // create
    // delete
    function fetchUsers(){
        fetch(`${BASE_URL}/users/new`)
        .then(resp => resp.json())
        .then(users => {
            for (const user of users) {
                let u = new User(user.id, user.name)
                u.renderUser()
            }
        })
    }

    function createFormI(){
        let usersForm = document.getElementById("users-form")
        
        usersForm.innerHTML +=
        `
        <form>
            <p>Name: <input type="text" id="name" placeholder="name"><p>
            <input type="submit" value="Submit">
        </form>

        `
        usersForm.addEventListener("submit", userFormSubmission)
    }

    function userFormSubmission() {
        event.preventDefault() 
        let name = document.getElementById("name").value
        
        let user = {
            name: name
        }
        fetch(`${BASE_URL}/users`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(user => {
            let u = new User(user.id, user.name)
            u.renderUser()
        })


    }

    function createPost(){
        let lunchPost = document.getElementById("lunch-form")

        lunchPost.innerHTML +=
        `
        <form>
        <p>Caption: <input type="text" id="caption" placeholder="Describe It"><p>
        <input type="submit" value="Submit">
        
        
        </form>

        `
        //lunchPost.addEventListener("submit", userFormSubmission)
    }
