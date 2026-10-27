function getWeather() {

    let city = document.getElementById("city").value;
    let apiKey = "29f267e6dc31df27e780c4efb667c6aa";
    

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
        .then(response => {
            let data = response.data;

            document.getElementById("weather").innerHTML =
                `<h2>${data.name}</h2>
                 <p>Temperature: ${data.main.temp} °C</p>
                 <p>Condition: ${data.weather[0].description}</p>
                 <p>Humidity: ${data.main.humidity}%</p>
                 <p>Wind: ${data.wind.speed} m/s</p>`;
        })
        .catch(error => {
            document.getElementById("weather").innerHTML =
                "City not found!";
        });
}