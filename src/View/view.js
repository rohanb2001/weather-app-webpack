import { infoTxt, weatherPart, wrapper } from "../index";
import { inputField } from "../Model/model";

export function onError(error) {
  infoTxt.innerHTML = error.message;
  infoTxt.classList.add("error");
}

export function addWeatherContent(weatherDetails) {
  const city = weatherDetails.name;
  const country = weatherDetails.sys.country;
  const { description } = weatherDetails.weather[0];
  const { temp, feels_like, humidity } = weatherDetails.main;

  weatherPart.querySelector(".temp .numb").innerHTML = Math.floor(temp);
  weatherPart.querySelector(".weather").innerHTML = description;
  weatherPart.querySelector(".location span").innerHTML = `${city}, ${country}`;
  weatherPart.querySelector(".temp .numb-2").innerHTML = Math.floor(feels_like);
  weatherPart.querySelector(".humidity span").innerHTML = `${humidity}%`;
  infoTxt.classList.remove("pending", "error");
  infoTxt.innerHTML = "";
  inputField.value = "";
  wrapper.classList.add("active");
}
