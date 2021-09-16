export const parkPreview = (parkObject) => {
    return `
      <section>
     
      
      
      <div class="parkImageDetail">
      <h4>${parkObject.fullName}</h4>
      <div class="parkImageDesc">
      <p>${parkObject.description}</p>
      <div id="parkImage">
      <div class="parkDetailButton">
      <button id="parkDetailsButton">Details</button>
      </div>
      
      <img src=${parkObject.images[2].url}>
      
      
      </div>
      </div>
      </div>
      
      
      
      
      
      
      
      
      </section>
    `
}