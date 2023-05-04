import React from "react"
import './Menu.css'

import { Link } from 'react-router-dom'

const Menu = props => {
    return (
        <header>
            <div className="Menu">
                <nav>
                    <ul>
                        <li>
                            <Link to="/cliente">Cliente</Link>
                        </li>
                        <li>
                            <Link to="/home">Início</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Menu