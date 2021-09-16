export const parkPreview = (parkObject) => {
    return `
      <section>
      <div id="parkImage">
      <img src=${parkObject.images[2] != undefined ? parkObject.images[2].url : "https://www.nps.gov/common/commonspot/templates/images/logos/nps_social_image_02.jpg"} alt="Image Missing">
           
      <div class="parkImageDetail">
      <h4 id="parkImageFullName">${parkObject.fullName}</h4>
      <div class="parkImageDesc">
      <p>${parkObject.description}</p>
      <button id="parkDetailsButton">Details</button>
      </div>
      </div>
      </div>      
      </section>
    `
}