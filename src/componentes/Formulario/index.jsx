import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import api from '../../services/api'

const Formulario = ({ user, setUser, setData }) => {

    const alterarCliente = () => {

        const novoUsuario = {
            nome: user.nome,
            cidade: user.cidade 
        }

        api
            .put(`/api/Cliente/${user.id}`, novoUsuario, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                setUser({})
                setData(oldData => {
                    const filtrado = oldData.filter(data => data.id !== user.id)
                    const newData = [...filtrado, user]
                    console.log(newData)
                    return newData
                })
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    return (
        <section className='formulario'>
            <form>
                {user && <button onClick={() => setUser({})}>X</button>}
                <h2>Cadastro de Cliente</h2>
                <CampoTexto label="Nome" value={user ? user.nome : ""} onChange={(e) => setUser(user =>{return{...user, nome: e.target.value}})} placeholder="Digite o seu nome" />
                <CampoTexto label="Cidade" value={user ? user.cidade : ""} onChange={(e) => setUser(user =>{return{...user, cidade: e.target.value}})} placeholder="Digite sua Cidade" />
                {user ? <Botao texto="Editar Cliente" onClick={alterarCliente}/> : <Botao texto="Criar Cliente" />}
            </form>
        </section>
    )
}

export default Formulario