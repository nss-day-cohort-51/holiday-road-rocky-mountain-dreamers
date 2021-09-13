import { settings } from "../Settings.js";

settings.graphhopperKey

fetch('https://graphhopper.com/api/1/route?point=starting_latitude,starting_longitude&point=destination_latitude,destination_longitude&vehicle=car&locale=us&instructions=true&calc_points=true&key=62d05d81-9505-481f-9af5-8d63a37302b3')
.then(response => response.json())
.then(data => console.log(data));