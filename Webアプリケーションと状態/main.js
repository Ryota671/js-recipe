const person = document.getElementById("person")

let age = 26
let isWorking = true
let isInSpace = false
let isBeardShaved = false

const draw = function () {
  if (isWorking) {
    person.textContent = "🧑‍💻"
  } else {
    person.textContent = "😄"
  }

  if (isInSpace) {
    person.textContent += "✨🪐✨"
  } else {
    person.textContent += "🈁➡️🌏"
  }
}

draw() // "🧑‍💻🈁➡️🌏"

const quitWorkingButton = document.getElementById("quit-working-button")
const LaunchButton = document.getElementById("launch-button")

//退勤ボタン
quitWorkingButton.onclick = function () {
  isWorking = false
  draw()
}

//打ち上げボタン
LaunchButton.onclick = function () {
  isInSpace = true
  draw()
}
