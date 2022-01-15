// 要素を取得する
const element = document.getElementById("elementId")
console.log("「要素を取得する」で取得した要素 →", element)

// 要素を取得する - 発展：子要素を取得する
const buttons = document.getElementById("buttons")

const button0 = buttons.ghildren[0]

for (const button of buttons.children) {
  button.onclick = function () {
    alert("clicked: " + button.textContent)
  }
}

// 要素を変更する - textContent
const elementTextContent = document.getElementById("element-textContent")
elementTextContent.textContent = "こんばんは"

// 要素を変更する - style
const elementStyle = document.getElementById("element-style")
elementStyle.style.fontWeight = "bold"

// 要素を変更する - className
const elementClassName = document.getElementById("element-className")
elementClassName.className = "nice-element"

element.className = "nice-element great-element"

// 要素を変更する - classList
const element = document.getElementById("element-classList")
element.classList.add("great-element")
element.classList.remove("nice-element")

// 要素を追加する - appendChild
const cardContainer = document.getElementById("element")
const card = document.createElement("div")
card.textContent = "こんばんは"
cardContainer.appendChild(card)

// 要素を追加する - 最新の方法
const elementPrepend = document.getElementById("element")
const div2 = document.createElement("div")
div2.textContent = "おはよう"
elementPrepend.prepend(card)

// 要素を削除する - remove
const elementRemove = document.getElementById("element-remove")
elementRemove.remove()

const card = document.createElement("div")
card.className = "card"
card.textContent = "こんばんは"
