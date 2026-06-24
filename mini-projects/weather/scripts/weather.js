let inputElem = document.querySelector('input');
let cityElem = document.querySelector('.city');
let dateElem = document.querySelector('.date');
let tempElem = document.querySelector('.temp');
let weatherElem = document.querySelector('.weather');
let hiLowElem = document.querySelector('.hi-low');
let dataElem = document.querySelector('.data');
let errorTextElem = document.querySelector('.error-text');
let searchBtnElem = document.querySelector('.search-btn');


searchBtnElem.addEventListener('click', () =>{
    console.log(inputElem.value);
    fetchData(inputElem.value);
    inputElem.value = "";
})

inputElem.addEventListener('keyup', (event) => {
    if(event.which === 13){
        fetchData(inputElem.value);
        inputElem.value = "";
    }
})

function fetchData(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dc88165438d1cb45f41d1181d05fc8f4`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showData(data);
        dataElem.classList.add('open');
        errorTextElem.classList.remove('open');
    })
    .catch(err => {
        console.log(err);
        errorTextElem.classList.add('open');
        dataElem.classList.remove('open');
    })
}

function showData(obj){
    cityElem.innerHTML = `${obj.name}, ${obj.sys.country}`;
    dateElem.innerHTML = showTime();
    tempElem.innerHTML = `${Math.round(obj.main.temp - 273.15)}<span>°c</span>`;
    weatherElem.innerHTML = `${obj.weather[0].main}`;
    hiLowElem.innerHTML = `${Math.round(obj.main.temp_min - 273.15)}°c / ${Math.round(obj.main.temp_max - 273.15)}°c`;
}

function showTime(){
    let weekdaysArr = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',];
    let monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let currentTime = new Date();
    let weekday = weekdaysArr[currentTime.getDay()];
    let day = currentTime.getDate();
    let month = monthsArr[currentTime.getMonth()];
    let year = currentTime.getFullYear();
    return `${weekday} ${day} ${month} ${year}`;
}


import { ClockBox } from "../ce-clock-box/clock-box.js";

window.customElements.define('clock-box', ClockBox)