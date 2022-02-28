let userForm = document.getElementById('github-form')

userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    getUsers(e.target.search.value)
  })

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
  let ul = document.getElementById("user-list")
  ul.innerHTML = ""

  users.forEach(user => {
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
    profile.innerHTML = "Profile" //user profile link

    li.append(avatarImg, userRepoLink, profile)
    ul.appendChild(li)
  })
}

function buildUser(user) {}

function getRepos(url) {
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then(r => r.json())
    .then(repos => displayRepos(repos))
}

function displayRepos(repos) {
  let repoList = document.getElementById("repos-list")
  repoList.innerHTML = ""
  repos.forEach(repo => {
    console.log(repo)
    let li = document.createElement("li")
    let repoLink = document.createElement("a")
    repoLink.href = repo.html_url
    repoLink.innerHTML = repo.full_name
    li.appendChild(repoLink)
    repoList.appendChild(li)
  })
}
