import './Botao.css'

const Botao = (props) => {

    const botaoEstilo = props.texto === 'Excluir' ? {backgroundColor:'red'}
        : props.texto === 'Alterar' ? {backgroundColor:'black'} : {backgroundColor:'#0c3a2d'};


    return (
        <button type='button' className='botao' style={botaoEstilo} onClick={props.onClick}>
            {props.texto}
        </button>
    )
}

export default Botao 