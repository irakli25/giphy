import {LoadGifs} from "./loadgifs.js";
import {giphyLinkTrending} from "./config.js";

class LoadTrends extends LoadGifs {
    constructor () {
        super();
        this._getList();
        
    }
    _getList = async () => {
        const url = `${giphyLinkTrending}`; 
        const response = await fetch(url); // response
        const obj = await response.json();
        const data = obj.data;
        data.map(this._getGif);
        this.load();
    }
}

export {LoadTrends};