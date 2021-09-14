import { settings } from "../Settings.js";

settings.npsKey

export const getParks = () => {
  
return fetch('https://developer.nps.gov/api/v1/parks?api_key=tzZP6v5u4m0uP29hVDbheFHc0zFjQZeoPDe0nlHz')
  .then(response => response.json())
  
}