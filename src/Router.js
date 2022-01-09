import React from "react";
import {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Pruebas from "./components/Pruebas";
import Prueba from "./components/Prueba";
import Peliculas from "./components/Peliculas";
import Error from "./components/Error";
import Formulario from "./components/Formulario";


class Router extends Component {

    render() {
        return (
            <Routes>
                <Route path="/" element={<Peliculas/>}></Route>
                <Route path="/formulario" element={<Formulario/>}></Route>
                <Route path="/ruta-pruebas">
                    <Route path="" element={<Pruebas/>}></Route>
                    <Route path=":id" element={<Prueba/>}></Route>
                </Route>
                <Route path="*" element={<Error/>}></Route>
            </Routes>
        )
    }

}

export default Router;