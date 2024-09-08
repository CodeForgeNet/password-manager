console.log("working");

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("button clicked")
    console.log(username.value, password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if (passwords == null) {
        let json = []
        json.push({ username: username.value, password: password.value })
        alert("Password Saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        console.log(json)
        json.push({ username: username.value, password: password.value })
        alert("Password Saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    }

})