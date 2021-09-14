import { getParks } from "./parks/ParkDataManager.js";

const showParks = () => {
    const parkElement = document.querySelector("#park");
    getParks().then((allParks) => {
        parkElement.innerHTML = getParksList(allParks);
    })
}

showParks();