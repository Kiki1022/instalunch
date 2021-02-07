document.addEventListener("DOMContentLoaded", () =>{
    fetchUsers()
})  

const BASE_URL = "http://localhost:3000"
    //read
    // create
    // delete
    function fetchUsers(){
        fetch(`${BASE_URL}/users`)
        .then(resp => resp.json())
        .then(users => {
            for (const user of users) {
                let u = new User(user.id, user.name)
                u.renderUser()
            }
        })
    }
