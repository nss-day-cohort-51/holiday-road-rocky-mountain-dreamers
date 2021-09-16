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
      </div>
    `
}