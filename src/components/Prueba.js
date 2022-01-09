import React from "react";
import {useParams} from "react-router-dom";

const Prueba = () => {
    let params = useParams()
    return (
        <h2>ID DETECTADO POR PARÁMETRO {params.id}</h2>
    )
}

export default Prueba;