
import { eatList } from "./eateries/EateryList.js";
import { getEateries, getSoloEat } from "./eateries/EateryDataManager.js";
import { bizList } from "./attractions/attractionList.js";
import { getBizarreries, getSoloBiz } from "./attractions/AttractionDataManager.js";
import { getParks, getSoloPark } from "./parks/ParkDataManager.js";
import { statesList } from "./states/statesList.js";
import { getStates } from "./states/statesDataManager.js";
import { ParkList } from "./parks/ParkList.js";
//import { park } from "./parks/Park.js";
import { parkPreview } from "./parks/parkPreview.js";
import { eatPreview } from "./eateries/EateriesPreview.js";
import { bizPreview } from "./attractions/attractionPreview.js";
import { parks } from "./parks/Park.js";
import { createTripEntry } from "./trips/tripDataManager.js";

const showParkDetail = () => {
    document.querySelector("#parkDetails").showModal();
}

const showEatDetail = () => {
    document.querySelector("#eatDetails").showModal();
}

const showBizDetail = () => {
    document.querySelector("#bizDetails").showModal();
}

const showEat = () => {
    // This Function takes the imported eateries and adds it to the drop doen menu in HTML
    const eatElement = document.querySelector("#eatery");
    getEateries().then(response => {
        eatElement.innerHTML = eatList(response);
    }
    )
}
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
        //console.log(soloParkData)
        parkPreviewElement.innerHTML = parkPreview(soloParkData[0])
        const parkDetailsButtonElement = document.querySelector("#parkDetailsButton")
        
        parkDetailsButtonElement.addEventListener("click", event => {
            showParkDetail();
        })
        //console.log(parkCode)
    })
}
const showEatPreview = (eatery) => {
    const eatPreviewElement = document.querySelector("#eatDisplay");
    getSoloEat(eatery).then((soloEatData) => {
        //console.log(soloEatData)
        eatPreviewElement.innerHTML = eatPreview(soloEatData)
        const eatDetailsButtonElement = document.querySelector("#eateryDetailsButton")

        eatDetailsButtonElement.addEventListener("click", event => {
            showEatDetail();
        } )
    })
}

const showBizPreview = (bizarrery) => {
    const bizPreviewElement = document.querySelector("#bizDisplay");
    getSoloBiz(bizarrery).then((soloBizData) => {
        //console.log(soloBizData)
        bizPreviewElement.innerHTML = bizPreview(soloBizData)
        const bizDetailsButtonElement = document.querySelector("#bizarreryDetailsButton")

        bizDetailsButtonElement.addEventListener("click", event => {
            showBizDetail();
        })
    })
}

const applicationElement = document.querySelector("#leftSection");
applicationElement.addEventListener("change", event => {

    if (event.target.id === "state") {
        //THE NEXT LINE DISABLES THE READ ONLY FUNCTION OF THE NATL PARKS SELECT BOX
        park.removeAttribute("disabled");
        showPark(event.target.value)
    }
    else if (event.target.id === "park") {
        //THE NEXT LINE DISABLES THE READ ONLY FUNCTION OF THE BIZARRERY SELECT BOX
        bizarrery.removeAttribute("disabled");
        showParkPreview(event.target.value)
    }
    else if (event.target.id === "bizarrery") {
        //THE NEXT LINE DISABLES THE READ ONLY FUNCTION OF THE BIZARRERY SELECT BOX
        eatery.removeAttribute("disabled");
        showBizPreview(event.target.value)
    }
    else if (event.target.id === "eatery") {
        //THE NEXT LINE DISABLES THE READ ONLY FUNCTION OF THE SAVE TRIP BUTTON
        saveTripButton.removeAttribute("disabled");
        showEatPreview(event.target.value)
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

const saveButtonElement = document.querySelector("#saveTripButton");
saveButtonElement.addEventListener("click", event => {
    event.preventDefault();
    //collect the input values into an object to post to the DB
    const savedState = document.querySelector("select[name='state']").value;
    const savedPark = document.querySelector("select[name='park']").value;
    const savedBizarrery = document.querySelector("select[name='bizarrery']").value;
    const savedEatery = document.querySelector("select[name='eatery']").value;

    const savedTripObject = {
        stateId: savedState,
        parkId: savedPark,
        bizarreryId: parseInt(savedBizarrery),
        eateryId: parseInt(savedEatery)
    }
    console.log(savedTripObject);
    // be sure to import from the DataManager
    createTripEntry(savedTripObject)
        .then(dbResponse => {
            //showTrips();
        });
})



showBiz();
showStates();
showEat();