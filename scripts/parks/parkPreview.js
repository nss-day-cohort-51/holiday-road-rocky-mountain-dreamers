export const parkPreview = (parkObject) => {
    return `
      <section>
      <div id="parkImage">
      <img src=${parkObject.images[2].url}>
      
      
      <div class="parkImageDetail">
      <h4>${parkObject.fullName}</h4>
      <div class="parkImageDesc">
      <p>${parkObject.description}</p>
      <button id="parkDetailsButton">Details</button>
      </div>
      </div>
      </div>
      
      
      
      
      
      
      
      
      </section>
    `
}