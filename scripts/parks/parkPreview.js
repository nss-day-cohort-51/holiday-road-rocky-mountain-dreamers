export const parkPreview = (parkObject) => {
  return `
      <section>

      
      
           

      <div class="parkImageDetail">
      <h4 id="parkImageFullName">${parkObject.fullName}</h4>
      <div class="parkImageDesc">
      <p>${parkObject.description}</p>
      
      <div class="parkDetailButton">
      <button id="parkDetailsButton">Details</button>
      </div>
      <div id="parkImage">
      <img src=${parkObject.images[2] != undefined ? parkObject.images[2].url : "https://www.nps.gov/common/commonspot/templates/images/logos/nps_social_image_02.jpg"} alt="Image Missing">
      </div>
      <dialog id="parkDetails" onClick="close()">HI</dialog>
      
      
      
      </div>
      </div>
       
      </section>
    `
}
