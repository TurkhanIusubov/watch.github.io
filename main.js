let sec = document.querySelector('.secs')
let min = document.querySelector('.mins')
let hour = document.querySelector('.hours')

function tictac(){
    let second = new Date().getSeconds()
    let minute = new Date().getMinutes()
    let hours = new Date().getHours()

    sec.style.transform = `rotate(${180 + (second * 6)}deg)`
    min.style.transform = `rotate(${180 + (minute * 6)}deg)`
    hour.style.transform = `rotate(${180 + (hours * 30)}deg)`








}





setInterval(tictac, 1000)



