export const bizarreries = (bizObject) => {
    // this function returns the NAME of the bizzareries into the drop down
    return `
    <option value=${bizObject.id}>${bizObject.name}</option>
    `
}
