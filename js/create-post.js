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
    const randomString = generateDateBasedRandomString();
    try{const req = await fetch('https://centralapps.hivefinty.com/v1/databases/670a9a430005df75e1f2/collections/670a9a4b001b9946e88e/documents', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.6.0",
            "X-Appwrite-Project": "66fbca7000374a8800a5"
        },
        body: JSON.stringify({
            documentId: randomString,
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



function generateDateBasedRandomString() {
    const dateStr = Date.now().toString(36); // Convert current time to base-36 string
    const randomStr = Math.random().toString(36).substring(2); // Random string
    const combinedStr = (dateStr + randomStr).substring(0, 20); // Combine and truncate to 20 characters
    return combinedStr;
}
