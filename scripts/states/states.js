export const states = (statesObject) => {
    return `<option value=${statesObject.stateCode}>${statesObject.stateName}</option>`
}