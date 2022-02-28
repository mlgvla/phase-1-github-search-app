document.addEventListener("DOMContentLoaded", () => {
  setElements()
})
let form


function setElements() {
  form = document.getElementById("github-form")
  form.addEventListener("submit", e => {
    e.preventDefault()
    getUsers(e.target.search.value)
  })
}

function getUsers(user) {
  fetch(`https://api.github.com/search/users?q=${user}`, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then(r => r.json())
    .then(users => displayUsers(users.items))
}

function displayUsers(users) {

    console.log(users)

    users.forEach(user => {
        buildUser(user)
    });
  
}

function buildUser(user) {
    let ul = document.getElementById('user-list')
    console.log(ul)
    let li = document.createElement('li')
    let avatarImg = document.createElement('img')
    avatarImg.height = "50"
    avatarImg.width = "50"
    avatarImg.src = user.avatar_url
    li.appendChild(avatarImg)
    ul.appendChild(li)
}
