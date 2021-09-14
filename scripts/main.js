import { eatList } from "./eateries/EateryList.js";
import { getEateries } from "./eateries/EateryDataManager.js";
import { bizList } from "./attractions/attractionList.js";
import { getBizarreries } from "./attractions/AttractionDataManager.js";

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

showBiz();