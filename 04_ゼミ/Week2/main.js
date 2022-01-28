const inputElement = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const container = document.getElementById("memo-container")

addButton.onclick = function () {
  const text = inputElement.value

  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  card.append(todo)

  container.append(card)

  inputElement.value = ""

  console.log(container.textContent)

  return card
}
