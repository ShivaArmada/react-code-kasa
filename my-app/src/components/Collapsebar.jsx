import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Collapsebar.scss";

function Collapsebar({ list }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="collapsebar">
      {list &&
        list.map((item, index) => (
          <div key={index} className="collapsebar__content">
            <div className="collapsebar__content--text">
              <h3 className="collapsebar__content--text--title">{item.title}</h3>
              {openIndex === index && (
                <p className='collapsebar__content--text--desc' dangerouslySetInnerHTML={{ __html: item.content }} />
              )}
            </div>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {openIndex === index ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronUp} />
              )}
            </button>
          </div>
        ))}
    </div>
  );
}

export default Collapsebar;