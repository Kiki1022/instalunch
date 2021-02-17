class User {
    constructor(id, name){
        this.id = id
        this.name = name
    }

  
//render user instance method

renderUser() {
    let usersDiv = document.getElementById("users-container")

    usersDiv.innerHTML +=
    `
    
    <p>Name ${this.name}<p>
    
    <button class="create-post" data-id=${this.id}>Create My Lunch Wish</button>
    `
}
}