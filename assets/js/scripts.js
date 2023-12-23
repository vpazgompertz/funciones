const ele1 = document.getElementById("ele1")

const pintar = (color = 'green') => {
    ele1.style.backgroundColor = color
}

pintar()
ele1.addEventListener("click", function () {
    pintar('yellow')
})