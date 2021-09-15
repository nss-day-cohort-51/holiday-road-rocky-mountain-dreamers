// export const MoodList = (allMoods) => {
//     const moodFinder = document.querySelector(".journal__moods")
//     let postHTML = `<select name="journal_mood" class="newPost__input"><option value="0">Choose Your Mood</option>`;
//     //Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
//     for (const moodObject of allMoods) {
//         //what is a postObject?
//         postHTML += `<option value="${moodObject.id}">${moodObject.mood}</option>`
//     }
//     postHTML += `</select>`
//     moodFinder.innerHTML = postHTML;

// }

import { park } from "./Park.js";

export const ParkList = (allParks) => {
    const parkFinder = document.querySelector("#park")
    let parkHTML = `<select id="park"><option value=0>Choose Your Park</option>`;
    for (const parkObject of allParks) {
    parkHTML += park(parkObject)
    }

    return parkHTML;
}

// parkHTML += `</select>`
// parkFinder.innerHTML = parkHTML;
// }

// this code tells the park data where to show in the HTML
