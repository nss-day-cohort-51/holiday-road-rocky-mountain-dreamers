import { bizarreries } from "./attraction.js";

export const bizList = (allBiz) => {
    // this function creates the list for the dropdown menu so we can display it when imported to main
    let bizHTML = `<select name="bizarrery"><option value="0">Choose Your Bizarrery</option>`;
    for (const bizObject of allBiz) {
        bizHTML += bizarreries(bizObject)
    }
    return bizHTML
}