import React from "react";
import {Component} from "react";

class Search extends Component {

    render() {
        return (
            <form id="App-search">
                <h3>Buscador</h3>
                <div className="center">
                    <label form="App-search-input">Encuentra el artículo que buscas</label>
                </div>
                <div className="center">
                    <input className="App-input App-input-search" name="App-search-input"/>
                </div>
                <div className="center">
                    <input type="submit" className="App-btn App-btn-black" value="Buscar"/>
                </div>
            </form>
        );
    }

}

export default Search;