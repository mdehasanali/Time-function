let divHours = document.querySelector('.hours')
let divMin = document.querySelector('.mint')
let divSec = document.querySelector('.sec')
let divformet = document.querySelector('.formet')


const repeat = () => {
    let time = new Date
    let houres = time.getHours()
    let mint = time.getMinutes()
    let sec = time.getSeconds()
    let formet = ''

    if (houres < 12) {
        formet = 'AM'
    } else {
        formet = 'PM'
    }
    if (houres == 0) {
        houres = 12
    }
    if (houres > 12) {
        houres -= 12
    }

    divHours.innerHTML = `${houres}`;
    divMin.innerHTML = `${mint}`
    divSec.innerHTML = `${sec}`
    divformet.innerHTML = `${formet}`

}
setInterval(repeat, 1000)









// setInterval(() => {
//     let time = new Date
//     let houres = time.getHours()
//     let mint = time.getMinutes()
//     let sec = time.getSeconds()
//     let formet = ''

//     if (houres < 12) {
//         formet = 'AM'
//     } else {
//         formet = 'PM'
//     }
//     if (houres == 0) {
//         houres = 12
//     }
//     if (houres > 12) {
//         houres = houres - 12
//     }

//      divHours.innerHTML = `${houres}`;
//      divMin.innerHTML = `${mint}`
//      divSec.innerHTML = `${sec}`
//      divformet.innerHTML = `${formet}`
// }, 1000)