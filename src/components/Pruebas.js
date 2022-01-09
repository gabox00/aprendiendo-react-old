import React from "react";
import {Component} from "react";

class Pruebas extends Component {

    state = {
        count : 0
    };

    sumar = () => {
        this.setState({
            count: (this.state.count + 1)
        })
    }

    restar = () => {
        this.setState({
            count: (this.state.count - 1)
        })
    }

    getID = (id) => {
        console.log(id)
    }

    render() {
        return (
            <div id="App-pruebas">
                <p>Contador: {this.state.count}</p>
                <input id="sumar" type="submit" value="Sumar" onClick={this.sumar}/>
                <input id="restar" type="submit" value="Restar" onClick={this.restar}/>
            </div>
        );
    }

}

export default Pruebas;
