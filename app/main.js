// Obtener datos de ubicación y clima del usuario
const iconoClima = document.getElementById("iconoClima");
const homeTemp = document.getElementById("homeTemp");
const homeCiudad = document.getElementById("homeCiudad");
const apiKeyClima = "1e0852abb42466a00a4d6d999c3e2b64";

const relojGrandeApp = document.getElementById('relojGrandeApp');
const fechaApp = document.getElementById('fechaApp');
const app = document.querySelectorAll('.app');
const iconoAppReloj = document.getElementById('iconoAppReloj');
const iconoAppClima = document.getElementById('iconoAppClima');
const iconoAppCalculadora = document.getElementById('iconoAppCalculadora');
const botonNavAtras = document.getElementById('botonNavAtras');

const appReloj = document.getElementById('appReloj');
const appClima = document.getElementById('appClima');
const appCalculadora = document.getElementById('appCalculadora');
const pantallaAppClima = document.getElementById('pantallaAppClima');

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

const ubicacionClima = (pos) => {
    const crd = pos.coords;
    console.log("location ready")
    let lat = crd.latitude;
    let lon = crd.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=${apiKeyClima}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
        homeTemp.innerText = `${Math.round(data.main.temp)}°C`;
        iconoClima.src = `./icons/weather-icons/${data.weather[0].icon}.svg`;
        pantallaAppClima.children[0].src = `./icons/weather-icons/${data.weather[0].icon}.svg`;
        pantallaAppClima.children[1].innerText = `${Math.round(data.main.temp)}°C`;
        pantallaAppClima.children[2].innerText = `ST: ${data.main.feels_like}°C`;
        pantallaAppClima.children[3].innerText = `${data.name}, ${data.sys.country}`; 
        pantallaAppClima.children[4].innerText = `${data.weather[0].description}`;
        pantallaAppClima.children[5].innerText = `Presión: ${data.main.pressure} hpa`;
        pantallaAppClima.children[6].innerText = `Humedad: ${data.main.humidity}%`;
        appClima.style.background = `url(/wallpapers/weather-wallpapers/${data.weather[0].icon}.jpeg)`;
        appClima.style.backgroundRepeat = 'no-repeat';
        appClima.style.backgroundSize = 'cover';
        return datosClima = data;
    })
};

const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
};


navigator.geolocation.getCurrentPosition(ubicacionClima, error, options);


// Funcionalidades para el estilo Android
const botonEntrarAndroid = document.getElementById("botonEntrarAndroid");
const introAndroid = document.getElementById("introAndroid");
const circulosInicio = document.querySelectorAll(".circulo_inicio");

// Datos de hora y fecha
const date = new Date();
const [horas, minutos, segundos] = [date.getHours(), date.getMinutes(), date.getSeconds()]

// Datos del clima 


const divFecha = document.getElementById("divFecha");

const fecha = new Date();
const [dia, mes, anio] = [fecha.getDate(), fecha.getMonth(), fecha.getFullYear()]; 
const actualizarFecha = (fecha) => {
    divFecha.innerText = `${dia}-${mes + 1}-${anio} `;
    fechaApp.innerText = `${dia}-${mes + 1}-${anio} `;
}  
actualizarFecha()

const fechaHora = () => {
    const divReloj = document.getElementById("divReloj");

    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    hh = hh < 10 ? `0${hh}` : hh
    mm = mm < 10 ? `0${mm}` : mm
    ss = ss < 10 ? `0${ss}` : ss

    let horaSinSegundos = `${hh}:${mm}`; 
    let hora = `${hh}:${mm}:${ss}`;
    divReloj.innerText = horaSinSegundos;
    relojGrandeApp.innerText = hora;
}

fechaHora()
setInterval(fechaHora, 1000)


botonEntrarAndroid.addEventListener("click", () => {
    introAndroid.classList.add("subirPantalla");
});

iconoAppReloj.addEventListener("click", () => {
    appReloj.classList.add('mostrar_app');
});
iconoAppClima.addEventListener("click", () => {
    appClima.classList.add('mostrar_app');
});
iconoAppCalculadora.addEventListener("click", () => {
    appCalculadora.classList.add('mostrar_app');
});

botonNavAtras.addEventListener("click", () => {
    appReloj.classList.remove('mostrar_app');
    appClima.classList.remove('mostrar_app');
    appCalculadora.classList.remove('mostrar_app');
    console.log('click aqui')
});