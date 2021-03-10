
document.addEventListener('DOMContentLoaded', async () => {
    const createPostForm = document.getElementById("create-post-form")
    const postList = await PostList.create(document.querySelector('#post-container'))
    createPostForm.addEventListener("submit",(e) => postList.newPost(e))
    postList.render()
    postList.mount()
//     ApiService.fetchCuisines()
//    let cuisineList = document.createElement('select')
//    let cuisineOption = document.createElement('option')

})


//window and document is a global object that we can access at any time and we can add an event listener to it

//dom loads from top to bottom


//DOMContentLoaded event fires when the page's DOM is fully parsed from the underlying HTML

//DOM-Document Object Model The DOM represents a code-based version of a web page. The DOM is the DNA version of the browser. 
//the three pillars
// communicate w the server, recognizing events, maniupulate the dom