import '../styles/HouseItemPreview.scss';
import '../components/HouseItem.jsx';
import '../components/HouseList.jsx';




function HouseItemPreview({ cover, title }) {
    return (
        <div className='Card'>
            <img className='Card__item' src={cover} alt={`${title} cover`} />
            <span className='Card__item--title'>{title}</span>
        </div>
    )
}

export default HouseItemPreview