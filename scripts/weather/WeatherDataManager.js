import { settings } from "../Settings.js"; 

settings.weatherKey


fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=02c33b63dfa80d2290b1b91ee7aae120}')
  .then(response => response.json())
  .then(data => console.log(data));