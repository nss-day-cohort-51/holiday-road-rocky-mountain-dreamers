import { eatList } from "./eateries/EateryList.js";
import { getEateries } from "./eateries/EateryDataManager.js";


const showEat = () => {
    // This Function takes the imported eateries and adds it to the drop doen menu in HTML
    const eatElement = document.querySelector("#eatery");
    getEateries().then(response => {
        eatElement.innerHTML = eatList(response);
    }
    )
}
showEat();