import React from "react";
import {Component} from "react";

class Todo extends Component {

    render() {
        return (
            <div id="App-todo">
                <h3>Puedes Hacer esto</h3>
                <div className="center">
                    <a className="App-btn App-btn-green" href="#">CREAR ARTÍCULO</a>
                </div>
            </div>
        );
    }

}

export default Todo;