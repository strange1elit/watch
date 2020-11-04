setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock() {
    const currrentDate = new Date()
    const secondRatio = currrentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currrentDate.getSeconds()) / 60
    const hourRatio = (minuteRatio + currrentDate.getSeconds()) / 12
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()