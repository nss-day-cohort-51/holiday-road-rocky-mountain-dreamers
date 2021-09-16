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
      </div>
    `
}

