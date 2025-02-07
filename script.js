// Logic to fill the table.

//Todo: Add the functionality to delete the password
const deletePassword = (website)=>{
    let data = localStorage.getItem("passwords") 
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((element)=>{
        return element.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
} 

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
                <td>${element.website}</td>
                <td>${element.username}</td>
                <td>${element.password}</td>
                <td><button class="btnsm" onclick="deletePassword(${element.website})">Delete</button></td>
            </tr>`
        }
        tb.innerHTML += str
    }
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