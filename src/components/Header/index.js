import styled from 'styled-components';
import Icones from '../icones';
import OpcoesHeader from '../Logo';
import Logo from '../OpcoesHeader';

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;

`

function Header() {
    return (
        <HeaderContainer>
            <OpcoesHeader />
            <Logo />
            <Icones />
        </HeaderContainer>
    )
}

export default Header;