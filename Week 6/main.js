
import { Hikes } from './hikes.js';

//on load grab the array and insert it into the page
window.addEventListener("load", () => {
    let hikes = new Hikes("hikes");
    hikes.showHikeList();
});