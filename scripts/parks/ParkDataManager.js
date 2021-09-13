import { settings } from "../Settings.js";

settings.npsKey

fetch('https://developer.nps.gov/api/v1/parks?api_key=tzZP6v5u4m0uP29hVDbheFHc0zFjQZeoPDe0nlHz')
  .then(response => response.json())
  .then(data => console.log(data));