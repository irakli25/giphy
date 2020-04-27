import {LoadGifs} from "./loadgifs.js";
import {LoadTrends} from "./loadtrends.js";
import {Storage} from "./storage.js";


const searchButton = document.getElementById("searchButton");
const trendButton = document.getElementById("trendButton");
const searchInput = document.getElementById("searchInput");
const closePlayer = document.getElementById("closePlayer");
const play = document.getElementById("play");

const storage = new Storage();

searchButton.addEventListener("click", () =>{
    const word = searchInput.value;
    const LoadGifsClass = new LoadGifs(word);
    storage.add(word);
    storage.getList();
    searchInput.value="";
})

trendButton.addEventListener("click", () => {
    const LoadTrendsClass = new LoadTrends();
    searchInput.value="";
})


closePlayer.addEventListener("click", ()=> {
    
    play.classList.add("hide");
})

play.addEventListener("click", ()=> {
    
    play.classList.add("hide");
})

