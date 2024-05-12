import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from './../Assets/logo-red.png';
import './../styles/Header.scss';



const HomeLink = styled.a`
    &&  {
        ${props => props.isHome && `
            text-decoration: underline;
        `}
    }
`;

// on surchage la spécificité sur le style global avec && pour que le style soit prioritaire
function Header() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header className="Header__nav">
            <img className='Header__nav--logo' src={logo} alt="logo-kasa" />
            <ul>
                <li className='--acceuil --btn'>
                    <HomeLink href="/" isHome={isHome}>Accueil</HomeLink>
                </li>
                <li className='--btn'>
                    <a href="/about">A Propos</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;