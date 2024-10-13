document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("message-form")

    form.addEventListener("submit", function(event) {
        event.preventDefault()
        let formName = document.getElementById("form-name").value
        let formEmail = document.getElementById('form-email').value
        let formSubject = document.getElementById('form-subject').value
        let formMessage = document.getElementById('form-message').value

        console.log(formName, formEmail, formSubject, formMessage)
        // CreatePost(titleInput, subTitleInput, imgInput, descInput)
        CreateMessage(formName, formEmail, formSubject, formMessage)
    })
})


const CreateMessage = async (name, email, subject, message) => {
    const randomString = generateDateBasedRandomString();
    try{const req = await fetch('https://centralapps.hivefinty.com/v1/databases/670a9a430005df75e1f2/collections/670c16c1001102e75e21/documents', {
        mode: "no-cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.6.0",
            "X-Appwrite-Project": "66fbca7000374a8800a5"
        },
        body: JSON.stringify({
            documentId: randomString,
            data: {
            name,
            email,
            subject,
            message,
          }},

        ),
    })
    const data = await req.json()
    if (data.status == 200){
    }
    alert("Message has been send")
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
