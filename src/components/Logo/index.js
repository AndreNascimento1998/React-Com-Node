import styled from 'styled-components';
import logo from '../../image/logo.svg';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const Imagem = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <Imagem 
                src={logo} 
                alt='logo'
                className='logo-img'
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;