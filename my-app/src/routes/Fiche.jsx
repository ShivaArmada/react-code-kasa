import "./../styles/Fiche.scss";
import { useParams, useNavigate } from "react-router-dom";
import HouseItem from "./../components/HouseItem.jsx";
import data from "../doc-kasa.json";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";


function Fiche() {
  const navigate = useNavigate();
  const id = useParams().id;
  const house = data.find((house) => house.id === id);

  //pour la redirection vers la page 404 si la maison n'existe pas (id incorrect)
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
          <Header />
        <HouseItem {...house} isFichePage />
          <Footer />
    </>
  );
}

export default Fiche;
