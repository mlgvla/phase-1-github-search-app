document.addEventListener("DOMContentLoaded", () => {
  setForm()
})
let form = null

function setForm() {
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
  users.forEach(user => {
    buildUser(user)
  })
}

function buildUser(user) {
  let ul = document.getElementById("user-list")

  let li = document.createElement("li")

  let avatarImg = document.createElement("img")
  avatarImg.height = "50"
  avatarImg.width = "50"
  avatarImg.src = user.avatar_url

  let userRepoLink = document.createElement("a")
  userRepoLink.innerHTML = `&nbsp&nbsp&nbsp${user.login}&nbsp&nbsp&nbsp`
  userRepoLink.addEventListener("click", () => getRepos(user.repos_url))

  let profile = document.createElement("a")
  profile.href = user.html_url
  profile.innerHTML = "Profile"

  li.append(avatarImg, userRepoLink, profile)
  ul.appendChild(li)
}

function getRepos(url) {
  fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
      }
  })
  .then(r => r.json())
  .then(repos => console.log(repos))
}
