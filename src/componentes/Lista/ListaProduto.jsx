import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Formulario from '../Formulario'
import Moment from 'moment/moment'

import './Lista.css'
import Botao from '../Botao'

const ListaProduto = props => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    

    useEffect(() => {
        api
            .get("/api/Produto")
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
                        <th>Id Produto</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={item.id} className={i % 2 === 0 ? 'linhaEscura' : ''}>
                            <td>{item.id}</td>
                            <td>{item.descricao}</td>
                            <td>{item.valor}</td>
                            <td>
                                <Botao texto="Editar" onClick={() => setUser({id: item.id, nome: item.nome, cidade: item.cidade})}/>
                                <Botao texto="Excluir" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListaProduto