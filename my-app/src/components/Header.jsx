import './../styles/Header.scss';
import logo from './../Assets/logo-red.png';

function Header() {
    return (
        <header className="Header__nav">
            <img className='Header__nav--logo' src={logo} alt="logo-kasa" />
            <ul>
                <li className='--acceuil --btn'  >
                    <a href="/">Accueil</a>
                </li>
                <li className='--btn'>
                    <a href="/about">A Propos</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;