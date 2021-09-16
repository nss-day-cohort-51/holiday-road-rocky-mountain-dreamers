export const eatPreview = (eatObject) => {
    return `
      <section>
      
      <div class="eatName">
      <h4>${eatObject.businessName}</h4>
      </div>
     
   

         
      <div class="eatDesc">
      <p>${eatObject.description}</p>
      </div>
      
      
      </section>
      <div class="eatDetailsButton">
      <button id="eateryDetailsButton">Details</button>
      <dialog id="eatDetails" onClick="close()">state:${eatObject.state}city:${eatObject.city}pet friendly:${eatObject.ameneties.petFriendly} restrooms:${eatObject.ameneties.restrooms} wifi:${eatObject.ameneties.wifi}</diaglog>
      </div>
    `
}

