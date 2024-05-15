import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsebar from './Collapsebar';
import '../styles/HouseItem.scss';
import '../styles/Collapsebar.scss';

function HouseItem({ id, cover, title, description, host, rating, location, equipments, tags }) {
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
      <img className='fiche__house--image' src={cover} alt={`${title} cover`} />
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
        <h4 className='fiche__proprio--nom'>{host.name}</h4>
        <img className='fiche__proprio--image' src={host.picture} alt={`${host.name}`} />
        <div className='fiche__score'>{renderStars(rating)}</div>
      </div>
      </div>
      <div className='fiche__collapse'>
      <Collapsebar list={houseDetails} />
      </div>
    </div>
  );
}

export default HouseItem;