import { getParks } from "./parks/ParkDataManager.js";

const showParks = (stateCode) => {
    const parkElement = document.querySelector("#park");
    getParks(stateCode).then((allParks) => {
        parkElement.innerHTML = getParksList(allParks);
    })


}

const applicationElement = document.querySelector("#leftSection");

applicationElement.addEventListener("change", event =>{
    if (event.target.id === "#state") {
    showParks(event.target.value)
    }
})




// getParksData();

