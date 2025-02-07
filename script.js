function maskPassword(pass) {

    let str = ""
    for (let index = 0; index < pass.length; index++) {
        str += "*" // Masking the password
    }
    return str
}


function copyText(text) {
    
    navigator.clipboard.writeText(text) // Copy text to clipboard 

    // Optionally, provide feedback to the user
    alert("Text copied to clipboard!");
}


//Todo: Add the functionality to delete the password
const deletePassword = (website)=>{
    let data = localStorage.getItem("passwords") 
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((element)=>{
        return element.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`${website} Password Deleted Successfully`)
    showPasswword();
} 


//? Logic to fill the table.
const showPasswword = () => {

    let tb = document.querySelector("table")
    let data = localStorage.getItem("passwords")
    if (data == null) {
        tb.innerHTML = "No data to show"
    } else {
        tb.innerHTML = `<tr>
                <th>Websites</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`
        let arr = JSON.parse(data);
        let str = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            str += `<tr>
                <td>${element.website} <img src="copy.svg" alt="Copy Button" width="24" height="24" onClick="copyText(${element.website})" />
</td>
                <td>${element.username} <img src="copy.svg" alt="Copy Button" width="24" height="24" onClick="copyText(${element.username})" />
</td>
                <td>${maskPassword(element.password)} <img src="copy.svg" alt="Copy Button" width="24" height="24" onClick="copyText(${element.password})" />
</td>
                <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
            </tr>`
        }
        tb.innerHTML += str
    }
    website.value = ""
    username.value = ""
    password.value = ""
}

console.log("working");

showPasswword();

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("button clicked")
    console.log(username.value, password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if (passwords == null) {
        let json = []
        json.push({website:website.value, username: username.value, password: password.value })
        alert("Password Saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        console.log(json)
        json.push({website:website.value, username: username.value, password: password.value })
        alert("Password Saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPasswword();

})