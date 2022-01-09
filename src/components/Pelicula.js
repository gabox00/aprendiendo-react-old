import React from "react";
import {Component} from "react";

class Pelicula extends Component {

    setFavorita = () => {
        this.props.peliculasFavoritas(this.props.pelicula)
    }

    render() {
        const pelicula = this.props.pelicula
        const {title,image} = pelicula

        return (
            <div id="pelicula">
                <img src={image} alt={title}/>
                <div id="pelicula-content">
                    <h3>{title}</h3>
                    <span>Hace 5 minutos</span>
                    <a href="#">Leer más</a>
                    <button id="pelicula-favorito" className="App-btn App-btn-black" onClick={this.setFavorita}>Favorita</button>
                </div>
            </div>
        );
    }

}

export default Pelicula;