export const parkPreview = (parkObject) => {
  return `
      <section class="parkRow">
        <div class="parkLeftColumn">
          <div class="parkImageDetail">
            <h4 id="parkImageFullName">${parkObject.fullName}</h4>
            <div class=parkDetailAndButton></div>
          </div>
          <div class="parkImageDesc">
            <p>${parkObject.description}</p>
          </div>
        
          <div class="parkDetailButton">
            <button id="parkDetailsButton">Details</button>
          </div>
        </div>

       <div id="parkImage">
        <img src=${parkObject.images[2] != undefined ? parkObject.images[2].url : "https://www.nps.gov/common/commonspot/templates/images/logos/nps_social_image_02.jpg"} alt="Image Missing"/>
      </div>

      <dialog id="parkDetails" onClick="close()">
        
          <h2 class="modalParkText">state:</h2><p class="modalParkText">${parkObject.states}</p>
          <p>directions:${parkObject.directionsInfo}</p>
        
        </dialog>

      </section>
    `
    
}
