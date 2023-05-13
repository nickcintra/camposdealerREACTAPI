import React from "react"
import ListaProduto from "../componentes/Lista/ListaProduto"
import Botao from "../componentes/Botao"

const Produto = props => (
    <div className="Produto">
        <div className="titulo-descricao">
            <div className="titulo-descricao">
                <h1>Produto</h1>
                <Botao texto="Criar" />
            </div>
            <ListaProduto />
        </div>
    </div>
)

export default Produto