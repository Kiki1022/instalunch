
document.addEventListener('DOMContentLoaded', async () => {
    const createPostForm = document.getElementById("create-post-form")
    const postList = await PostList.create(document.querySelector('#post-container'))
    createPostForm.addEventListener("submit", (e) => postList.newPost(e))
    postList.render()
    postList.mount()
})
