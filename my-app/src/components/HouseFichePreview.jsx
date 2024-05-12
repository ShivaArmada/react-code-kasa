import { motion } from 'framer-motion';
import '../styles/HouseFichePreview.scss';

function HouseFichePreview({ cover, title, description, location, host, rating, equipments, tags }) {
    return (
        <motion.div className='Card'>
            <img className='Card__item' src={cover} alt={`${title} cover`} />
            <span className='Card__item--title'>{title}</span>
            <p>{description}</p>
            <p>{location}</p>
            <h2>Host: {host.name}</h2>
            <img src={host.picture} alt={`${host.name}`} />
            <p>Rating: {rating}</p>
            <ul>
                {equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))}
            </ul>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </motion.div>
    )
}

export default HouseFichePreview;