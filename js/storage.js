import {LoadGifs} from "./loadgifs.js";

class Storage {
    constructor(){
        this.add("Internet Cats");
        this.add("Meme's");
        this.add("Typing");
        this.add("Space");
        this.add("Rick and Morty");
        this.getList();
    }
    add = (word) =>{
        if(word != "")
        localStorage.setItem(`_giphy_${word}_`,word);
    }
    remove = (word) => {
       const remove = delete localStorage[`_giphy_${word}_`];
       if(remove){
           this.getList();
       }
    }

    getList = () => {
        const history = document.getElementById("history");
        history.innerHTML = "";
        for(let key in localStorage){
            this._draw(key);
        }


    }

    _draw = (item) => {
        if(!item.indexOf('_giphy_')){  // start with _giphy_

            const history = document.getElementById("history");
            const historyTitleWrapper = document.createElement("div");
            const word = localStorage[item];
            const historyTitle = document.createElement("div");
            const historyTitleText = document.createTextNode(word);
            const deleteHistory = document.createElement("div");
            deleteHistory.setAttribute("search", word);
            deleteHistory.setAttribute("close","");
            deleteHistory.addEventListener("click", () => { // remove storage
                this.remove(word);
            });
            historyTitleWrapper.classList.add("historyTitleWrapper");
            historyTitle.classList.add("historyTitle");
            deleteHistory.classList.add("deleteHistory");
            historyTitle.appendChild(historyTitleText);
            historyTitleWrapper.setAttribute("search", word);
            historyTitleWrapper.appendChild(historyTitle);
            historyTitleWrapper.appendChild(deleteHistory);
            historyTitleWrapper.addEventListener("click", (e) => { // search history item
                if(!e.target.hasAttribute("close")){ // if not deleteHistory
                    const LoadGifsClass = new LoadGifs(word);
                    this.add(word);
                }
            });
            history.appendChild(historyTitleWrapper);
            
            

        }
        
    }
}

export {Storage};