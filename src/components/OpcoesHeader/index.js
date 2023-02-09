import styled from 'styled-components';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const Opcoes = styled.ul`
display: flex;
`
const Opcao = styled.li`
    font-size: 16px;
    min-width: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    margin-top: 10px;
`


function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map( (texto, index) => ( 
                <Opcao key={index}><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;