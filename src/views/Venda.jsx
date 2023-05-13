import React from "react"
import ListaVendas from "../componentes/Lista/ListaVenda"
import Botao from "../componentes/Botao"

const Venda = props => (
    <div className="Venda">
        <div className="titulo-descricao">
            <div className="titulo-descricao">
                <h1>Venda</h1>
                <Botao texto="Criar" />
            </div>
            <ListaVendas />
        </div>
    </div>
)

export default Venda