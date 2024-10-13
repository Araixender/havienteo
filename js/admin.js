document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");

    form.addEventListener('submit', function(event) {
        event.preventDefault()
        const emailInputValue = document.getElementById("email").value;
        const passwordInputValue = document.getElementById("password").value;
        LoggedInUser(emailInputValue, passwordInputValue)
    })
})




const LoggedInUser = async(email, password) => {
    const req = await fetch('https://centralapps.hivefinty.com/v1/account/sessions/email', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Response-Format": "1.6.0",
            "X-Appwrite-Project": "66fbca7000374a8800a5"
        },
        body: JSON.stringify({
            "email": email,
            "password": password
          }),
        credentials: "include",
    })
    const data = await req.json()
    if(req.status == 201){
        // jwtToken()
        localStorage.setItem("session_id", data['$id'])
        window.location.replace("/dashboard.html")
    }
    else if (req.status == 401){
        alert("Session already exist")

    }
    else{
        alert("Something went wrong!")
    }
    // window.location.replace("/dashboard.html");
}

// LoggedInUser()


// const jwtToken = async () => {
//     const jwt = await fetch("https://centralapps.hivefinty.com/v1/account/jwts", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "X-Appwrite-Response-Format": "1.6.0",
//             "X-Appwrite-Project": "66fbca7000374a8800a5",
//         },
//     })

//     const jwtData = await jwt.json()
//     console.log(jwtData)
// }


// jwtToken()


