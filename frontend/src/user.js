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
    <ul>
    <li>Name: ${this.name}</li>
    </ul>
    `
}
}