import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Formulario from './../Formulario'
import Moment from 'moment/moment'

import './Lista.css'
import Botao from '../Botao'

const ListaVendas = props => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});


    useEffect(() => {
        api
            .get("/api/Venda")
            .then((response) => setData(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    const formattedDateTime = (dataHora) => {
        return Moment(dataHora).format('DD-MM-YYYY');
    }


    return user.nome ? <Formulario user={user} setUser={setUser} setData={setData} /> :
        (

            <div className='Lista'>
                <table>
                    <thead>
                        <tr>
                            <th>Id Venda</th>
                            <th>Data da Venda</th>
                            <th>Valor total</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'linhaEscura' : ''}>
                                <td>{i}</td>
                                <td>{formattedDateTime(item.dataVenda)}</td>
                                <td>{'R$ ' + item.valorTotal}</td>
                                <td>
                                    <Botao texto="Visualizar"
                                        onClick={() =>
                                            setUser({
                                                id: item.id,
                                                nome: item.nome,
                                                cidade: item.cidade
                                            })}
                                    />
                                    <Botao texto="Editar"
                                        onClick={() =>
                                            setUser({
                                                id: item.id,
                                                nome: item.nome,
                                                cidade: item.cidade
                                            })}
                                    />
                                    <Botao texto="Excluir" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
}

export default ListaVendas