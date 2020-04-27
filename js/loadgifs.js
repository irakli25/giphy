import {giphyLink} from "./config.js";

class LoadGifs {

    constructor (word = "") {
        this._gifList = new Array(); 
        this._getList(word);
    }

    _getList = async (word) => {
        const url = `${giphyLink}&q=${word}`; 
        const response = await fetch(url); // response
        const obj = await response.json();
        const data = obj.data;
        data.map(this._getGif);
        this.load();
    }

    _getGif = (item) => {

        const gif = {
            src : item.images.fixed_height_still.url,
            animate : item.images.fixed_height.url,
            rating : item.rating,
            height : item.images.fixed_height.height,
            width : item.images.fixed_height.width
        }

        this._gifList.push(gif);
        
    }

    _draw = (item) => {

        const container = document.getElementById("gifsContainer");
        const gifElement = document.createElement("div");
        const rating = document.createElement("div");
        const ratingText = document.createTextNode(`Rating : ${item.rating}`);
        const gifWrapper = document.createElement("div");
        const gifPlay = document.createElement("div");
        gifPlay.classList.add("gifPlay");
        gifElement.style.backgroundImage = `url(${item.src})`;
        gifElement.setAttribute("src", item.src);
        gifElement.setAttribute("animate", item.animate);
        gifElement.setAttribute("height", item.height);
        gifElement.setAttribute("width", item.width);
        gifElement.classList.add("gif");
        gifPlay.addEventListener("click", () =>{
            const player = document.getElementById("play");
            const playerContent = document.getElementById("playerContent");
            player.classList.remove("hide");
            playerContent.style.width = `${2*item.width}px`;
            playerContent.style.height = `${2*item.height}px`;
            playerContent.style.backgroundImage = `url(${item.animate})`;
            
        })
        rating.classList.add("rating");
        rating.appendChild(ratingText);
        gifWrapper.classList.add("gifWrapper");
        gifWrapper.appendChild(gifElement);
        gifWrapper.appendChild(rating);
        gifWrapper.appendChild(gifPlay);
        container.appendChild(gifWrapper);
    }

    load = () => {
        const container = document.getElementById("gifsContainer");
        container.innerHTML = "";
        this._gifList.map(this._draw);
    }



}


export {LoadGifs};