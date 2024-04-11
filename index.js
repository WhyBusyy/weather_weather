const myKey = "43ac6165b788362190bdfe96753e2ee1";

const button = document.querySelector(".button");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(success, fail);
});

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);
};

const fail = () => {
  alert("사용자의 위치 확인이 불가합니다.");
};

const tempSec = document.querySelector(".temp");
const locationSec = document.querySelector(".location");
const descSec = document.querySelector(".desc");

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric&lang=kr`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const temperature = data.main.temp;
      const location = data.name;
      const description = data.weather[0].description;

      tempSec.innerText = temperature;
      locationSec.innerText = location;
      descSec.innerText = description;
    });
};
