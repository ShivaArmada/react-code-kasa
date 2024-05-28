import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/Collapsebar.scss";

function Collapsebar({ list, isFichePage }) {
  const [openIndices, setOpenIndices] = useState([]);

  const handleClick = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className={`collapsebar ${isFichePage ? "ficheP-collapse" : ""}`}>
      {list &&
        list.map((item, index) => (
          <div key={index} className="collapsebar__content">
            <div
              className={`collapsebar__content--header ${
                isFichePage ? "fiche-page" : ""
              }`}
            >
              <h3 className="collapsebar__content--title">{item.title}</h3>
              <button onClick={() => handleClick(index)}>
                {openIndices.includes(index) ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronUp} />
                )}
              </button>
            </div>
            {openIndices.includes(index) && (
              <p
                className={`collapsebar__content--desc ${
                  openIndices.includes(index) ? "expanded" : ""
                }`}
                style={isFichePage ? { maxWidth: "583px" } : {}}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            )}
          </div>
        ))}
    </div>
  );
}

export default Collapsebar;
