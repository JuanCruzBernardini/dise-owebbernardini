const form = document.getElementById("form")
const nombreForm = document.getElementById("nombre")

form.addEventListener(`submit`, (e) => {
    e.preventDefault()

     console.log(nombreForm.value)

       form.reset()

})