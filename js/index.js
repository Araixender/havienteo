// const posts = [
//     // {
//     //   id: 1,
//     //   title: "Understanding JavaScript Closures",
//     //   content: "Closures allow functions to access variables from an outer scope...",
//     //   author: "Aaraiz Baig",
//     //   createdAt: "2024-10-12T10:00:00Z"
//     // },
//     // {
//     //   id: 2,
//     //   title: "Asynchronous JavaScript Explained",
//     //   content: "Asynchronous code in JavaScript can be handled with callbacks, promises, or async/await...",
//     //   author: "Aaraiz Baig",
//     //   createdAt: "2024-10-11T14:30:00Z"
//     // },
//     // {
//     //   id: 3,
//     //   title: "JavaScript Array Methods You Should Know",
//     //   content: "JavaScript provides powerful array methods such as map, filter, and reduce...",
//     //   author: "Aaraiz Baig",
//     //   createdAt: "2024-10-10T08:15:00Z"
//     // }
//   ];
const gettingPost = async () => {
    const postapi = await fetch("https://centralapps.hivefinty.com/v1/databases/670a9a430005df75e1f2/collections/670a9a4b001b9946e88e/documents", {
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.6.0",
            "X-Appwrite-Project": "66fbca7000374a8800a5"
        }})
    
    const data = await postapi.json()
    console.log(data.documents)
    posts.append(data.documents)


    const postElements = document.getElementById("posts");
    let htmlContent = ""
    for (let post of data.documents.reverse()){
        htmlContent += `<div class="" style="padding: 2rem; margin: .5rem 3rem; box-shadow: 2px 2px 12px #918f87">
        <a href="post.html?id=${post['$id']}" class="" style="color: #e94d65;"><h3 class="">${post['title']}</h3></a>
        <p class="" style="color: #a1a1a1">${post['sub-title']}</p>
    </div>`
    }

postElements.innerHTML = htmlContent
}
gettingPost()




