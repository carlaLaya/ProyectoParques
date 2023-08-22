setInterval (() => {
    let reloj = document.getElementsByClassName("reloj")[0];
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    let segundos = tiempoActual.getSeconds();
    reloj.innerHTML = hora + ":" + minutos + ":" + segundos ;
    }, 1000);


