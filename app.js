setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')

// function setRotation(element, rotationRatio) {
//   element.style.setProperty('--rotation', rotationRatio * 360)
// }

// // Initial setting of clock hands to 12 o'clock
// // setRotation(secondHand, 0)
// setRotation(minuteHand, 0)
// setRotation(hourHand, 0)

// function setSmoothClock() {
//   const currentDate = new Date()
//   const secondsRatio = currentDate.getSeconds() / 60
//   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

//   setRotation(secondHand, secondsRatio)
//   setRotation(minuteHand, minutesRatio)
//   setRotation(hourHand, hoursRatio)
// }

// // Wait for a short delay before setting the clock smoothly
// setTimeout(setSmoothClock, 50)

// setInterval(setSmoothClock, 1000)
