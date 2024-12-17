const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")

console.log(products)
let url = "https://my-json-server.typicode.com/Salamandra19977/marketplace"  
let profile = document.getElementById("profile")  

fetch(`${url}/users/${id}`)
    .then(async function (response) {
        let user = await response.json();
        console.log(user)
        let profileElem = document.createElement('div');
        profileElem.classList.add('profile');
        profileElem.innerHTML = `
            <img class="profile-photo" src="${user.photo_url}">
            <h2>${user.name}</h2>
            <p class="username">${user.username || user.surname || user.sirname || user.sername}</p>
            <p class="balance">${user.balance} USD</p>
        `
        profile.appendChild(profileElem);
    })
