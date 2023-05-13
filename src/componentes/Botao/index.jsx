import './Botao.css'

const Botao = (props) => {

    const botaoEstilo = props.texto === 'Excluir' ? {backgroundColor:'#FF3B3B'}
        : props.texto === 'Editar' ? {backgroundColor:'#2E4053'} : props.texto === "Visualizar" ? 
        {backgroundColor:'#289DFF'} :  props.texto === 'Criar' ? {backgroundColor:'#00C6A0'} : 
        {backgroundColor:'#0c3a2d'};


    return (
        <button type='button' className='botao' style={botaoEstilo} onClick={props.onClick}>
            {props.texto}
        </button>
    )
}

export default Botao 