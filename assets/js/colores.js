const item1 = document.getElementById("item1")
const item2 = document.getElementById("item2")
const item3 = document.getElementById("item3")
const item4 = document.getElementById("item4")

item1.addEventListener("click", () => changeColorBlack())
item2.addEventListener("click", () => changeColorBlack())
item3.addEventListener("click", () => changeColorBlack())
item4.addEventListener("click", () => changeColorBlack())

function changeColorBlack() {
  this.style.backgroundColor = 'black'
}

let currentSelectedColor

const colorMap = {
    'a': 'pink',
    's': 'orange',
    'd': 'lightblue',
}

const paintElement = (id, color = currentSelectedColor) => {
    document.getElementById(id).style.backgroundColor = color
}

const handleParagraphColor = (color = 'white') => {
    const keyElement = document.getElementById('key')
    keyElement.style.backgroundColor = color
}

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function () {
        this.style.backgroundColor = 'black'
    })
})

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase()
    if (colorMap[key]) {
        currentSelectedColor = colorMap[key]
        handleParagraphColor(currentSelectedColor)
    } else {
        handleParagraphColor('')
    }
})