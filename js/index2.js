const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


const postId = urlParams.get('id');

if (postId){
    postIdGenerator(postId)
}

async function postIdGenerator(postId){
    const postapi = await fetch("https://centralapps.hivefinty.com/v1/databases/670a9a430005df75e1f2/collections/670a9a4b001b9946e88e/documents/"+postId, {
        headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.6.0",
            "X-Appwrite-Project": "66fbca7000374a8800a5"
        }})
    
    const data = await postapi.json()
    console.log(data)
    let innerDocu = document.getElementById("insertion")
    console.log(innerDocu)
    const date = new Date(data.$createdAt);
    const readableDate = date.toLocaleDateString(); 

    innerDocu.innerHTML = `<p class="" style="color: rgb(97, 92, 92)">${readableDate}</p>
				<h2 style="color: #e94d65;">${data.title}</h2>
				<div class="" style="width: 100%; height: 14rem; background: #a1a1a1; background-image: url('${data.img}'); background-repeat: no-repeat;
				background-size: cover; background-position: center;"></div>
                <p id="" style="line-height: 2rem; margin: 2rem 0rem;">${data.desc}</p>`
    




}


