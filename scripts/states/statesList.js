import { states } from "./states.js";

export const statesList = (allStates) => {
    // this function creates the list for the dropdown menu so we can display it when imported to main
    let statesHTML = `<select name="state"><option value="0">Choose Your State</option>`;
    for (const statesObject of allStates) {
        statesHTML += states(statesObject)
    }
    return statesHTML
}