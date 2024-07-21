setInterval(() => {
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")

    let date = new Date()
    // !HOURS
    let crrctHours = date.getHours()
    if (crrctHours > 12) {
        crrctHours = crrctHours - 12;
    }
    hours.innerText = crrctHours < 10 ? "0" + crrctHours : crrctHours

    // !MINUTES
    let crrctMinutes = date.getMinutes()
    if (crrctMinutes < 10) {
        minutes.innerText = `0${crrctMinutes}`
    } else {
        minutes.innerText = date.getMinutes()
    }

    // !SECONDS
    let crrctSeconds = date.getSeconds()
    if (crrctSeconds < 10) {
        seconds.innerText = `0${crrctSeconds}`
    } else {
        seconds.innerText = date.getSeconds()
    }

}, 1000)