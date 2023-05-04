import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = ({label, ...rest}) => {
    
    
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input {...rest}/>
        </div>
    )
}

export default CampoTexto