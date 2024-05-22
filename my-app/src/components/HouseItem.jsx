import { useState } from 'react';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsebar from './Collapsebar';
import styled from 'styled-components';
import '../styles/Collapsebar.scss';
import '../doc-kasa.json';

const StyledCollapsebar = styled(Collapsebar)`
  max-width: ${props => props.isFichePage ? '582px' : 'auto'};
`;

function HouseItem({ id, pictures, title, description, host, rating, location, equipments, tags, isFichePage }) {
  const images = [...pictures];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const houseDetails = [
    { title: 'Description', content: description },
    { title: 'Équipments', content: equipments.join('<br />') },
  ];

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={regularStar} />);
      }
    }
    return stars;
  };

  return (
    <div key={id} className='fiche__house'>
      <div className='fiche__house--cadre'>
        <button className="prev-button" onClick={() => setCurrentImageIndex(currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1)}>&lt;</button>
        <img className='fiche__house--image' src={images[currentImageIndex]} alt={`${title} cover`} />
        <button className="next-button" onClick={() => setCurrentImageIndex(currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0)}>&gt;</button>
        <p className="image-counter">{currentImageIndex + 1}/{images.length}</p>
      </div>
      <div className='fiche__allbasicinfos'>
        <div className='fiche__infos'>
          <h1 className='fiche__house--titre'>{title}</h1>
          <p className='fiche__house--localisation'>{location}</p>
          <ul className='fiche__house--tags'>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className='fiche__proprio'>
          <div className='fiche__proprio--wrap'>
            <h4 className='fiche__proprio--nom'>{host.name}</h4>
            <img className='fiche__proprio--image' src={host.picture} alt={`${host.name}`} />
          </div>
          <div className='fiche__score'>{renderStars(rating)}</div>
        </div>
      </div>
      <div className='fiche__collapse'>
        <StyledCollapsebar list={houseDetails} isFichePage={isFichePage} />
      </div>
    </div>
  );
}

export default HouseItem;