import '../styles/HouseItem.css'

function HouseItem({ id, cover, title, description, host, rating, location, equipments, tags }) {
    return (
        <li key={id} className='lmj-house-item'>
            <img className='lmj-house-item-cover' src={cover} alt={`${title} cover`} />
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <h3>Host: {host.name}</h3>
                <img src={host.picture} alt={`${host.name}`} />
            </div>
            <p>Rating: {rating}</p>
            <p>Location: {location}</p>
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
        </li>
    )
}

export default HouseItem