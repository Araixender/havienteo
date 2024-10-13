const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


const postId = urlParams.get('postid');


if (postId){
    postIdGenerator(postId)
}

async function postIdGenerator(postId){
    const postapi = await fetch("https://centralapps.hivefinty.com/v1/databases/670a9a430005df75e1f2/collections/670a9a4b001b9946e88e/documents/"+postId, {
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.6.0",
            "X-Appwrite-Project": "66fbca7000374a8800a5"
        }})
    
    const data = await postapi.json()
    document.getElementById("title").value = data['title']
    document.getElementById("sub-title").value = data['sub-title']
    document.getElementById("img").value = data['img']
    document.getElementById('desc').value = data['desc']

}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("post-form")

    form.addEventListener("submit", function(event) {
        event.preventDefault()
        const titleInput = document.getElementById("title").value
        const subTitleInput = document.getElementById("sub-title").value
        const imgInput = document.getElementById('img').value
        const descInput = document.getElementById("desc").value

        console.log(titleInput, subTitleInput, imgInput, descInput)
        CreatePost(titleInput, subTitleInput, imgInput, descInput)
    })
})



const CreatePost = async (title, subTitle, img, desc) =>{
    try{
        const req = await fetch('https://centralapps.hivefinty.com/v1/databases/670a9a430005df75e1f2/collections/670a9a4b001b9946e88e/documents/'+ postId, {
        method: "PATCH",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.6.0",
            "X-Appwrite-Project": "66fbca7000374a8800a5"
        },
        body: JSON.stringify({
            data: {
            "title": title,
            "sub-title": subTitle,
            "img": img,
            "desc": desc,
          }},

        ),
    })
    const data = await req.json()
    if (data.status == 200){
    }
    window.location.replace("/dashboard.html")
    console.log(req)
    }
    catch (error){
        alert("There is an error")
    }
}


