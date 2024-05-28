let myForm = document.getElementById("myForm")
let myInputField = document.getElementById("myInputField")
let myList = document.getElementById("myList")


myForm.addEventListener("submit", (e) => {
e.preventDefault()
addItem(myInputField.value)
})

function addItem(item)
{
  let templateHTML = `<li> ${item} <button onClick="deleteItem(this)">Delete</button></li><br>`
  myList.insertAdjacentHTML("beforeend",templateHTML)
  myInputField.value= ""
  myInputField.focus()
}

function deleteItem(itemToDelete)
{
  itemToDelete.parentElement.remove()
}

