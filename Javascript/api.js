

let contenedor = document.getElementById("clima");

fetch("https://api.openweathermap.org/data/2.5/weather?q=Uruguay&units=metric&appid=e3f337086beb61b7e1d81f9261f24692")
.then( response=> response.json())
.then( data=> {contenedor.innerHTML= `<span> Ciudad: ${data.name}</span>
                                    <span> Temp: ${data.main.temp}</span>`
})