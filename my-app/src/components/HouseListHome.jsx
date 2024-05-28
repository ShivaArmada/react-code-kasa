import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HouseItem from "../components/HouseItemPreview.jsx";
import data from "../doc-kasa.json";

// cadrage de la vitrine des maisons sur la page d'accueil
// array pour le mélange des maisons auto au refresh
// fais la navigation vers la fiche de la maison

function HouseListHome() {
  const navigate = useNavigate();
  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleClick = (id) => {
    setSelectedHouse(id);
  };

  useEffect(() => {
    if (selectedHouse !== null) {
      setTimeout(() => {
        navigate(`/Fiche/${selectedHouse}`);
      });
    }
  }, [selectedHouse, navigate]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <>
      {selectedHouse === null && (
        <section className="House__List">
          <div className="House__List--cadres">
            {shuffleArray(data)
              .slice(0, 37)
              .map((house) => (
                <HouseItem
                  key={house.id}
                  cover={house.cover}
                  title={house.title}
                  onClick={() => handleClick(house.id)}
                />
              ))}
          </div>
        </section>
      )}
    </>
  );
}

export default HouseListHome;
