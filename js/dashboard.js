const sessionId = localStorage.getItem("session_id")

const LoggedInUser = async(email, password) => {
    const req = await fetch(`https://centralapps.hivefinty.com/v1/account/sessions/${sessionId}`, {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.6.0",
            "X-Appwrite-Project": "66fbca7000374a8800a5"
        }
    })
    const data = await req.json()
    console.log(data)
}

LoggedInUser()

const DeleteSession = async() => {
    const req = await fetch(`https://centralapps.hivefinty.com/v1/account/sessions/${sessionId}`, {
        method: "DELETE",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.6.0",
            "X-Appwrite-Project": "66fbca7000374a8800a5"
        }
    })
    const data = await req.json()
    console.log(data.current)
    window.location.replace("/admin.html")
}



const logoutBtn = document.getElementById("logout-btn")
logoutBtn.addEventListener('click', DeleteSession)


