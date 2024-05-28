import logo from "../Assets/logo-white.png";
import "./../styles/Footer.scss";

function Footer() {
  return (
    <section className="footer">
      <img className="footer--img" src={logo} alt="logo-white" />
      <p className="footer--text">© 2024 Kasa. All rights reserved</p>
    </section>
  );
}

export default Footer;
