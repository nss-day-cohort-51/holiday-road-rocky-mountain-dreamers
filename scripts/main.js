
import { getParks } from "./parks/ParkDataManager.js";
import { bizList } from "./attractions/attractionList.js";
import { getBizarreries } from "./attractions/AttractionDataManager.js";

const showBiz = () => {
    // This Function takes the imported info from attractions and adds it to the drop down menu in HTML
    const bizElement = document.querySelector("#bizarrery");
    getBizarreries().then(response => {
        bizElement.innerHTML = bizList(response);
    }
    )
}
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



showBiz();