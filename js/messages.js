const CreateMessage = async () => {
    console.log("hello")
    try {
        const req = await fetch('https://centralapps.hivefinty.com/v1/databases/670a9a430005df75e1f2/collections/670c16c1001102e75e21/documents', {
            method: "GET",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "X-Appwrite-Response-Format": "1.6.0",
                "X-Appwrite-Project": "66fbca7000374a8800a5"
            },
        })
        const data = await req.json()
        console.log(data.documents)
        let htmlContent = ""
        for (let post of data.documents.reverse()) {
            const date = new Date(post.$createdAt);
            const readableDate = date.toLocaleDateString(); 
            htmlContent += `<div class="card mb-3 my-3">
            <div class="card-body">
              <h5 class="card-title ">Name: ${post['name']}</h5>
              <p class="card-text">Email: ${post['email']}</p>
              <p class="card-text">Subject: ${post['subject']}</p>
              <p class="card-text">Message: ${post['message']}</p>
              <p class="card-text">Date: ${readableDate}</p>
            </div>
          </div>`
        }
        document.getElementById("messages-container").innerHTML = htmlContent

    }
    catch (error) {
        // alert("There is an error")
        console.log(error)
    }

}


CreateMessage()