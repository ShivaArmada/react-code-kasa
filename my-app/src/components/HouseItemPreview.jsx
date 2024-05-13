
import '../styles/HouseItemPreview.scss';

function HouseItemPreview({ cover, title, layoutId, onClick }) {
    return (
        <div className='Card' layoutId={layoutId} onClick={onClick}>
            <img className='Card__item' src={cover} alt={`${title} cover`} />
            <span className='Card__item--title'>{title}</span>
        </div>
    )
}

export default HouseItemPreview;