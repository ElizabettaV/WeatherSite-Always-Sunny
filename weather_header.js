const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=53.669353&lon=23.813131&exclude=hourly&units=metric&lang=ru&appid=9ba22db0083b3535636603bdcde14973`;

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("city").textContent = jsObject.name;
    const descrip = jsObject.weather[0].description;

    document.getElementById("current-desc").textContent = descrip;

    document.getElementById("current-humid").textContent =
      jsObject.main.humidity;
    document.getElementById("current-windSpeed").textContent =
      jsObject.wind.speed;

    // "ощущается как"
    let T = (document.getElementById("current-temp").textContent = Math.floor(
      jsObject.main.temp
    ));

    let W = (document.getElementById("current-windSpeed").textContent =
      Math.ceil(jsObject.wind.speed));
    const wc = 35.74 + 0.6215 * T - 35.75 * W ** 0.16 + 0.4275 * T * W ** 0.16;
    document.getElementById("current-windChill").textContent = Math.floor(wc);
    // console.log(wc);
  });