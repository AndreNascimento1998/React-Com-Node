import styled from 'styled-components';
import perfil  from '../../image/perfil.svg';
import sacola from '../../image/sacola.svg'

const icones = [perfil, sacola];
const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 20px;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 25;
`

function Icones() {
    return (
        <IconesContainer>
                {icones.map( (icon, index) => (
                    <Icone key={index}><img src={icon} className='icone'></img></Icone>
                ))}
        </IconesContainer>
    )
}

export default Icones;