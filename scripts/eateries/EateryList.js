import { eateries } from "./Eatery.js";

export const eatList = (allEat) => {
    // this function creates the list for the dropdown menu so we can display it when imported into main 
	let eatHTML = `<select name="eatery"><option value="0">Choose Your Eatery</option>`;
		for (const eatObject of allEat) {
			eatHTML += eateries(eatObject)
		}
		return eatHTML;
	
}

