import { NavLink } from 'react-router-dom';
import * as S from './styled';

export default function Navbar() {

    return (
        <S.NavContainer>
            <NavLink to='/' >홈</NavLink>
            <NavLink to='/1' >1</NavLink>
            <NavLink to='/2' >2</NavLink>
        </S.NavContainer>
    )
}