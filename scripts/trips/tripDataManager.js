export const createTripEntry = tripObj => {
    return fetch("http://localhost:8088/trips", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tripObj)
  
    })
        .then(response => response.json())
  }


  export const getTrips = () => {
    // this function imports the info from the eateries JSON and returns it into our code for us
    return fetch("http://localhost:8088/trips")
      .then(response => response.json())
  }