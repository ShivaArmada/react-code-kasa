import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from './../Assets/logo-red.png';
import './../styles/Header.scss';



const NavLink = styled.a`
    &&  {
        ${props => props.currentPath === props.path && `
            text-decoration: underline;
        `}
    }
`;

// on surchage la spécificité sur le style global avec && pour que le style soit prioritaire
function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className="Header__nav">
            <img className='Header__nav--logo' src={logo} alt="logo-kasa" />
            <ul>
                <li className='--acceuil --btn'>
                    <NavLink href="/" path="/" currentPath={currentPath}>Accueil</NavLink>
                </li>
                <li className='--btn'>
                    <NavLink href="/about" path="/about" currentPath={currentPath}>A Propos</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;