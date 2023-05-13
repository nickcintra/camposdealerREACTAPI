import React from "react"
import Lista from "../componentes/Lista"

import './Cabecalho.css'
import Botao from "../componentes/Botao"

const Cliente = props => {
    return (
        <div className="Cliente">
            <div className="titulo-descricao">
                <h1>Cliente</h1>
                <Botao texto="Criar" />
            </div>
            <Lista />
        </div>
    )
}

export default Cliente