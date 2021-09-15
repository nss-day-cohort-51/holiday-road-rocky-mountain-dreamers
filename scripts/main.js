
import { eatList } from "./eateries/EateryList.js";
import { getEateries } from "./eateries/EateryDataManager.js";
import { bizList } from "./attractions/attractionList.js";
import { getBizarreries } from "./attractions/AttractionDataManager.js";
import { getParks, getSoloPark } from "./parks/ParkDataManager.js";
import { statesList } from "./states/statesList.js";
import { getStates } from "./states/statesDataManager.js";
import { ParkList } from "./parks/ParkList.js";
import { park } from "./parks/Park.js";
import { parkPreview } from "./parks/parkPreview.js";









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
const showPark = (stateCode) => {
    const parkElement = document.querySelector("#park");
    getParks(stateCode).then((allParks) => {
        parkElement.innerHTML = ParkList(allParks);
    })


}

const showParkPreview = (parkCode) => {
    const parkPreviewElement = document.querySelector("#parkDisplay");
    getSoloPark(parkCode).then((soloParkData) => {
        console.log(soloParkData)
        parkPreviewElement.innerHTML = parkPreview(soloParkData[0])
        console.log(parkCode)
    })

    
}




const applicationElement = document.querySelector("#leftSection");

applicationElement.addEventListener("change", event =>{
    
    if (event.target.id === "state") {
    console.log(event.target.value)
        showPark(event.target.value)
    }
    else if (event.target.id=== "park"){
        showParkPreview(event.target.value)
        
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

// const applicationElement = document.querySelector("park")
// documentElement.addEventListener("click", event =>{
//     if (event.target.value) {
//         console.log("drop down value", event.target.value)
//     }
// }





// getParksData();



showBiz();
showStates();
