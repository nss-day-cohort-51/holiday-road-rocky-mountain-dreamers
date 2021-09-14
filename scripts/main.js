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

showBiz();