
import { eatList } from "./eateries/EateryList.js";
import { getEateries } from "./eateries/EateryDataManager.js";
import { bizList } from "./attractions/attractionList.js";
import { getBizarreries } from "./attractions/AttractionDataManager.js";
import { getParks } from "./parks/ParkDataManager.js";
import { statesList } from "./states/statesList.js";
import { getStates } from "./states/statesDataManager.js";


const showEat = () => {
    // This Function takes the imported eateries and adds it to the drop doen menu in HTML
    const eatElement = document.querySelector("#eatery");
    getEateries().then(response => {
        eatElement.innerHTML = eatList(response);
    }
    )
}
showEat();

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

const showStates = () => {
    // This Function takes the imported info from attractions and adds it to the drop down menu in HTML
    const statesElement = document.querySelector("#state");
    getStates().then(response => {
        statesElement.innerHTML = statesList(response);
    }
    )
}



// getParksData();



showBiz();
showStates();