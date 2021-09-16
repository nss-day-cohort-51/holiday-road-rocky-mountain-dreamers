export const bizPreview = (bizObject) => {
    return `
      <section>
      <div class="bizName">
      <h4>${bizObject.name}</h4>
      </div>
      
      <div class="bizDesc">
      <p>${bizObject.description}</p>
      </div>
      
     
      
      
      
      </section>
      <div class="bizDetailButton">
      <button id="bizarreryDetailsButton">Details</button>
      <dialog id="bizDetails" onClick="close()">
        <p>state:${bizObject.state}</p>
        <p>city:${bizObject.city}</p>
        <p>souvenirs:${bizObject.ameneties.souvenirs}</p>
        <p>restrooms:${bizObject.ameneties.restrooms}</p>
        </dialog>
      </div>
    `
}

