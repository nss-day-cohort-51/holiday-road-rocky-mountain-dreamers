export const getBizarreries = () => {
// this function imports the info from the bizarreries JSON and returns it into our code for use
return fetch('http://holidayroad.nss.team/bizarreries')
  .then(response => response.json())
}

let bizCollection= []

export const getSoloBiz= (id) => {

  return fetch(`http://holidayroad.nss.team/bizarreries/${id}`)
  .then(response => response.json())
  .then(parsedResponse => {
    bizCollection = parsedResponse;
    return bizCollection; 
  
})
}