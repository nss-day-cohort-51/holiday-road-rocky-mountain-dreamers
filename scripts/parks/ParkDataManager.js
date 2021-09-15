import { settings } from "../Settings.js";

settings.npsKey

let parkCollection = [];

export const getParks = (stateCode) => {
  
return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=tzZP6v5u4m0uP29hVDbheFHc0zFjQZeoPDe0nlHz`)
  .then(response => response.json())
  .then(parsedResponse => {
    parkCollection = parsedResponse.data;
    return parkCollection;
  } )
  
  
}

export const getSoloPark = (parkCode) => {

  return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=tzZP6v5u4m0uP29hVDbheFHc0zFjQZeoPDe0nlHz`)
  .then(response => response.json())
  .then(parsedResponse => {
    parkCollection = parsedResponse.data;
    return parkCollection; 
  })
}



