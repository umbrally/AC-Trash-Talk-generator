let title = document.querySelector('.title')

let form = document.querySelector('form')

form.addEventListener('click', function (event) {
  let option = event.target.value
  if (event.target.type === 'radio') {
    title.innerHTML = `你想對${option}講幹話?`
  }
})