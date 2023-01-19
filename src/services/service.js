import { API_KEY, state } from "../Model/model";
import { infoTxt, weatherDetails } from "../index";
import { onError } from "../View/view";

const locationBtn = document.querySelector("button");

export function requestApi(city) {
  state.api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  console.log(state.api);
  fetchData();
}

export function fetchData() {
  infoTxt.innerHTML = "Getting weather details...";
  infoTxt.classList.add("pending");
  fetch(state.api)
    .then((res) => res.json())
    .then((result) => {
      weatherDetails(result);
    })
    .catch(() => {
      infoTxt.innerHTML = "Something went wrong";
      infoTxt.classList.replace("pending", "error");
    });
}

function getGeoLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("Your browser not support geolocation api");
  }
}

function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  state.api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
  console.log(latitude, longitude);
  fetchData();
}

// Event Listeners
locationBtn.addEventListener("click", getGeoLocation);
