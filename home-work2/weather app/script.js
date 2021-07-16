let humidity = document.getElementById('current-humidity'),
    pressure = document.getElementById('current-pressure'),
    temperature = document.getElementById('current-temperature'),
    windSpeed = document.getElementById('current-wind-speed'),
    getWeatherButton = document.getElementById('getWeather'),
    weatherSummary = document.getElementById('weather-summary'),
    countryMain = document.getElementById('country'),
    cityMain = document.getElementById('city'),
    textCity = document.getElementById('textCity'),
    textBtn = document.getElementById('textBtn'),
    minTemp = document.getElementById('minTemp'),
    maxTemp = document.getElementById('maxTemp'),
    weather = document.getElementById('weather'),
    list = document.getElementById('list'),
    temp = document.getElementById('location-city-country'),
    load = document.getElementById('loader');

    
textCity.addEventListener('focus', showBtn);
getWeatherButton.addEventListener('click', getWeatherCoordinates);
textBtn.addEventListener('click',getWeatherCity);

let apiKey = '8034d07ea1d48a3ec6ca5c36b6a0dcb4';
let informCelsius;
let timeout;

function getWeatherCoordinates() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            getWeatherData(position.coords.latitude, position.coords.longitude);
        })
    } else {
        return alert('Could not get current location');
    }
    removeBlock()
    displayLoader()
}

function getWeatherData(latitude, longitude) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch((error) => console.error(error))
        displayLoader();
}

function getWeatherCity() {
    let city = textCity.value
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch((error) => {
            cityMain.innerHTML = "Your city not found";
            temp.style.display = 'block';
        })
}

function displayData(data) {
    cityMain.innerHTML=data.name;
    humidity.innerHTML = data.main.humidity + ' %';
    pressure.innerHTML = data.main.pressure + 'hPa';
    windSpeed.innerHTML = data.wind.speed + 'm/s';
    weather.innerHTML = getIcon(data.weather[0].icon);
    temperature.innerHTML = getCelsius(data.main.temp) + ' ºC';
    minTemp.innerHTML = 'Min: ' + '<br />' + getCelsius(data.main.temp_min) + 'ºC';
    maxTemp.innerHTML = 'Max: ' + '<br />' + getCelsius(data.main.temp_max) + 'ºC';
    countryMain.innerHTML = data.sys.country;

    weather.style.display = 'block';
    list.style.display = 'block';
    temp.style.display = 'block';

    clear()
}

getIcon = (icon) => {
    let apiIcon = 'https://openweathermap.org/img/w/' + icon + '.png';
    let attr = weather.setAttribute('src', apiIcon);
    return attr;
}

getCelsius = (num) => { informCelsius = num - 273,15;
    return Math.floor(informCelsius);
}

function displayLoader() {
    if(load.style.visibility='hidden') {
        timeout = setTimeout(() => load.style.visibility = 'visible');
        return timeout;
    }
}

clear = () => {
    if(load.style.visibility = 'visible') load.style.visibility = 'hidden';
}

function removeBlock() {
    if(list.style.display = 'block') {
        list.style.display = 'none';
        temp.style.display = 'none';
    }
}

function showBtn() {
    if(textCity !== ''){
        textBtn.style.display = 'block';
        removeBlock()
        displayLoader()
    }
}