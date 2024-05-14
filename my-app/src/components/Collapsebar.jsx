import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import aboutList from '../aboutList.json';
import '../styles/Collapsebar.scss';

function Collapsebar() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="collapsebar">
      {aboutList.map((item, index) => (
        <div key={index} className="collapsebar__content">
          <h3 className='collapsebar__content--title'>{item.title}</h3>
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {openIndex === index ? <FontAwesomeIcon icon={faCircleChevronDown} /> : <FontAwesomeIcon icon={faCircleChevronUp} />}
          </button>
          {openIndex === index && <p className='collapsebar__content--desc'>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Collapsebar;