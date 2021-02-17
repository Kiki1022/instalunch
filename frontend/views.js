

function views(){
    const root = document.getElementById("main")
    const userForm = root.innerHTML 

    const createPost = (name) => ` 
    <form>

        <p>Hello ${name}!</p>
        <input type="text" placeholder="link to food pic">
        <input type="text" placeholder="Comment"> 
        <button>Submit</button>

    </form>
    `

    const render = (html) => {
        root.innerHTML = "" 
        root.insertAdjacentHTML("afterbegin", html)
    }




    return {
        root,
        userForm,
        render, 
        createPost
    }





}