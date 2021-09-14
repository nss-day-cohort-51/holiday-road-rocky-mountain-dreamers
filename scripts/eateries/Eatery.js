
export const eateries = (eatObject) => {
    // This function returns the BUSINESS NAME of the eateries into the dropdown 
    return `
    <option value=${eatObject.id}>$(eatObject.businessName)</option>
    `
}
