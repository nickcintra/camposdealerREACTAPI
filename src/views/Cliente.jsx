import React from "react"
import Lista from "../componentes/Lista"

import './Cabecalho.css'

const Cliente = props => {
    return (
        <div className="Cliente">
            <div className="titulo-descricao">
                <h1>About</h1>
                <p>Sobre Nos !</p>
            </div>
            <Lista />
        </div>
    )
}

export default Cliente