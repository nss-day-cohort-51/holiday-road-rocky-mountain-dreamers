export const getEateries = () => {
  // this function imports the info from the eateries JSON and returns it into our code for us
return fetch('http://holidayroad.nss.team/eateries')
    .then(response => response.json())
}