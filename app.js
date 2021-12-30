const board = document.querySelector('#board')
const colors = ['#E97F7F', '#E98B7F', '#E99E7F', '#E9A67F', '#E9B17F', '#E9B77F', '#E9C07F', '#E9CD7F', '#E9D87F', '#E9E47F', '#E0E97F', '#DAE97F', '#D2E97F', ]
const SQUARES_NUMBER = 810

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(el) {
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = '0 0 2px #000000'
}

function getRandomColor() {
    const idColor = Math.floor(Math.random() * colors.length)

    return colors[idColor]
}