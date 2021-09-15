export const getEateries = () => {
  // this function imports the info from the eateries JSON and returns it into our code for us
  return fetch('http://holidayroad.nss.team/eateries')
    .then(response => response.json())
}

let eatCollection= []
// this function imports info from the eateries json, finds the ID, and returns it into our code for us.
export const getSoloEat= (id) => {
  
  return fetch(`http://holidayroad.nss.team/eateries/${id}`)
    .then(response => response.json())
    .then(parsedResponse => {
      eatCollection = parsedResponse;
      return eatCollection;
    })
}