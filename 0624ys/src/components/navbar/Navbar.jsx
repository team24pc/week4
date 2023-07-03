import { NavLink } from 'react-router-dom';
import * as S from './styled';
import ModeToggle from './ModeToggle';

export default function Navbar() {

    return (
        <S.NavContainer>
            <ModeToggle/>
            <NavLink to='/' >홈</NavLink>
            <NavLink to='/1' >1</NavLink>
            <NavLink to='/2' >2</NavLink>
        </S.NavContainer>
    )
}