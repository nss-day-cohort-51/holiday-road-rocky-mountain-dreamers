import { parks } from "./Park.js";

export const ParkList = (allParks) => {
    const parkFinder = document.querySelector("#park")
    let parkHTML = `<select id="park"><option value=0>Choose Your Park</option>`;
    for (const parkObject of allParks) {
    parkHTML += parks(parkObject)
    }

    return parkHTML;
}

// parkHTML += `</select>`
// parkFinder.innerHTML = parkHTML;
// }

// this code tells the park data where to show in the HTML
