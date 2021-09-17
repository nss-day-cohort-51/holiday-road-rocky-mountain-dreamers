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
      <dialog id="eatDetails" onClick="close()">
      <p>state:${eatObject.state}</p>
      <p>city:${eatObject.city}</p>
      <p>pet friendly:${eatObject.ameneties.petFriendly}</p>
      <p>restrooms:${eatObject.ameneties.restrooms}</p>
      <p>wifi:${eatObject.ameneties.wifi}</p>
      </diaglog>
      </div>
    `
}

