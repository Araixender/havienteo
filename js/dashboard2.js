const gettingPost = async () => {
    const postapi = await fetch("https://centralapps.hivefinty.com/v1/databases/670a9a430005df75e1f2/collections/670a9a4b001b9946e88e/documents?order=$createdAt&orderType=DESC", {
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.6.0",
            "X-Appwrite-Project": "66fbca7000374a8800a5"
        }})
    
    const data = await postapi.json()
    console.log(data.documents)

    const postElements = document.getElementById("card-container");
    console.log(postElements)
    let htmlContent = ""
    for (let post of data.documents.reverse()){
        htmlContent += `<div class="card mb-3 my-3">
            <div class="card-body">
              <h5 class="card-title ">${post['title']}</h5>
              <p class="card-text">${post['sub-title']}</p>
              <button class="btn btn-primary" onclick="deletePost('${post['$id']}')">Delete</button>
              <a href="update-post.html?postid=${post['$id']}" class="btn btn-primary">Update</a>
            </div>
          </div>
    
    
    
    `
    }

postElements.innerHTML = htmlContent

}
gettingPost()


const deletePost = async (id) => {
    console.log("hello", id)
    const delapi = await fetch("https://centralapps.hivefinty.com/v1/databases/670a9a430005df75e1f2/collections/670a9a4b001b9946e88e/documents/"+ id, {
        mode: "no-cors",
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.6.0",
            "X-Appwrite-Project": "66fbca7000374a8800a5"
        }})
    
    // const data = await delapi.json()
    console.log(delapi)
    window.location.reload()
}
// jldskjfoeiuoeuwr3893