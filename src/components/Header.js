import React from "react";
import {Component} from "react";
import logo from "../assets/images/logo.svg";
import {Link, NavLink} from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <div className="App-header-logo">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <span id="App-brand">
                        <strong>Curso</strong>React
                    </span>
                </div>
                <nav id="App-header-menu">
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName="active">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
                        </li>
                        <li>
                            <NavLink to="ruta-pruebas" activeClassName="active">Pagina 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="ruta-pruebas/1" activeClassName="active">Pagina 2</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

}

export default Header;