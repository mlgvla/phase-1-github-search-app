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

    
}