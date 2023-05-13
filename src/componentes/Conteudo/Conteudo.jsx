import './Conteudo.css'
import React from "react"
import { Routes, Route } from 'react-router-dom'

import Cliente from '../../views/Cliente'
import Venda from '../../views/Venda'
import Produto from '../../views/Produto'

const Conteudo = props => (
    <main className="conteudo">
        <Routes>
            <Route path="/cliente" element={<Cliente />}/>
            <Route path="/venda" element={<Venda />}/>
            <Route path="/produto" element={<Produto />}/>  
        </Routes>
    </main>
)

export default Conteudo