export const trips = (park, biz, eat, tripObject) => {
    return `
      <section class="post">
      <div id="singleTrip">
        <h2 class="post__title">Saved ${tripObject.stateId} Trip</h2>
        <p>National Park: ${park.fullName}</p>
        <p>Bizarrery: ${biz.name}</p>
        <p>Eatery: ${eat.businessName}</p>
        </div>
      </section>
    `
  }