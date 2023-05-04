import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Formulario from './../Formulario'

import './Lista.css'
import Botao from '../Botao'

const Lista = props => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        api
            .get("/api/Cliente")
            .then((response) => setData(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);
   
    return user.nome ? <Formulario user={user} setUser={setUser} setData={setData}/>:
    (

        <div className='Lista'>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cidade</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{item.cidade}</td>
                            <td>
                                <Botao texto="Alterar" onClick={() => setUser({id: item.id, nome: item.nome, cidade: item.cidade})}/>
                                <Botao texto="Excluir" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Lista