let postList;
async function createPost(e){
    console.log("form submitted")
    e.preventDefault()
    const username = document.querySelector('#input-name').value
    const caption = document.querySelector('#input-caption').value
    const img_src = document.getElementById("img-src").value
    const cuisineInput = document.querySelector('#cuisine')
    const cuisine_id = parseInt(cuisineInput.value)
    const cuisineName = cuisineInput.options[cuisineInput.selectedIndex].textContent




    const API = new ApiService()   
    const post = await API.newPost({username, caption, img_src, cuisine_id})

    postList.add(post, {name: cuisineName})
}
document.addEventListener('DOMContentLoaded', async () => {
    const createPostForm = document.getElementById("create-post-form")
    createPostForm.addEventListener("submit", createPost)
    postList = await PostList.get('#post-container')
    postList.render()
    postList.mount()
    console.log(postList)

})
