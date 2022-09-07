const horaActual = () => {
    const reloj = document.querySelector("h1")

    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    hh = hh < 10 ? `0${hh}` : hh
    mm = mm < 10 ? `0${mm}` : mm
    ss = ss < 10 ? `0${ss}` : ss

    let hora = `${hh}:${mm}:${ss}`
    reloj.innerText = hora
}

horaActual()
setInterval(horaActual, 1000)