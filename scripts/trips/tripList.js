import { trips } from "./trip.js";
import { getSoloPark } from "../parks/ParkDataManager.js";
import { getSoloBiz } from "../attractions/AttractionDataManager.js";
import { getSoloEat } from "../eateries/EateryDataManager.js";

export const tripList = (tripPosts) => {
const postElement = document.querySelector("#savedTripData");
    //Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
    for (const tripObject of tripPosts) {
        getSoloPark(tripObject.parkId).then(savedPark => {
            let park = savedPark[0];
            getSoloBiz(tripObject.bizarreryId).then(savedBiz => {
                let biz = savedBiz;
                getSoloEat(tripObject.eateryId).then(savedEat => {
                    let eat = savedEat;
                    let trip = trips(park, biz, eat, tripObject);
                    postElement.innerHTML += trip;
                })
            })
        })
    }
}