import './Conteudo.css'
import React from "react"
import { Routes, Route } from 'react-router-dom'

import Cliente from '../../views/Cliente'
import Home from '../../views/Home'

const Conteudo = props => (
    <main className="conteudo">
        <Routes>
            <Route path="/cliente" element={<Cliente />}/>
            <Route path="/home" element={<Home />}/>
        </Routes>
    </main>
)

export default Conteudo