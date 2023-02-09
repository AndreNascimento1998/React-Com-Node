import styled from 'styled-components';
import Input from '../Input'
import { useState } from 'react';
import {livros} from './DadosPesquisa';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const ListaPesquisa = styled.div`
    display: flex;
    margin-top: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor:pointer;
`

function Pesquisa() {
    let [livrosPesquisados, setLivrosPesquisados] = useState([]);
    return (
        <PesquisaContainer>
            <h1>Já sabe por onde começar ?</h1>
            <h4>Econtra seu livro em nossa estante.</h4>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={e => {
                    const textoDigitado = e.target.value;
                    const resultadoPesquisao = livros.filter( (item) => item.nome.includes(textoDigitado));
                    setLivrosPesquisados(resultadoPesquisao);
                }}
            />
            {livrosPesquisados.map( (item, index) => (
                <ListaPesquisa>
                    <img key={index} src={item.src} height='200px'/>
                    <strong key={index}>{item.nome}</strong>
                </ListaPesquisa>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;