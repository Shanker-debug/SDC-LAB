function getWeather() {

    let city = document.getElementById("city").value;
    let key = "29f267e6dc31df27e780c4efb667c6aa";

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => {

        let temp = data.list.slice(0, 5).map(x => x.main.temp);
        let time = data.list.slice(0, 5).map(x => x.dt_txt);

        new Chart(document.getElementById("chart"), {
            type: "line",
            data: {
                labels: time,
                datasets: [{
                    label: "Temperature",
                    data: temp
                }]
            }
        });

    })
    .catch(() => alert("City not found"));
}