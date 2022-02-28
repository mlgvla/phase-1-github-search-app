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
            Accept: "application/vnd.github.v3+json"
        }
    })
    .then(r => r.json())
    .then(users => console.log(users))
}