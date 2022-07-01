const board = document.querySelector('#board')
const colors = ['#F08080', '#7FFF00', '#008000', '#008B8B', 'l#FF4500', '#00FFFF', '#8B4513', '#ADFF2F']
const SQUARES_NUMBER = 300

for (let i  = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener ('mouseover', () => setColor(square))
    square.addEventListener ('mouseleave', () => removeColor(square))
   
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

    function removeColor(element) {
        element.style.backgroundColor = '#1d1d1d'
        element.style.boxShadow = `0 0 2px #000`
    }

    function getRandomColor() {
       const index = Math.floor(Math.random () * colors.length)
       return colors[index]
    }