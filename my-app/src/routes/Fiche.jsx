import "./../styles/Fiche.scss";
import { useParams, useNavigate } from "react-router-dom";
import HouseItem from "./../components/HouseItem.jsx";
import data from "../doc-kasa.json";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .Header__nav {
    width : min(1280px, 100%)
  }
`;

function Fiche() {
  const navigate = useNavigate();
  const id = useParams().id;
  const house = data.find((house) => house.id === id);

  useEffect(() => {
    if (!house) {
      navigate("/not-found");
    }
  }, [house, navigate]);

  if (!house) {
    return null;
  }

  return (
    <>
      <GlobalStyle />
      <div className="body">
        <header className="header">
          <Header />
        </header>
        <HouseItem {...house} isFichePage />
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Fiche;
