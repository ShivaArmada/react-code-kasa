import HouseItem from './HouseItem.jsx'
import data from '../doc-kasa.json'

function HouseList() {
    return (
        <div className='House-list__CadreG'>
            <span className='House-list__Cadre'>
                <ul>
                    {data.map((house) => (
                        <HouseItem
                            key={house.id}
                            {...house}
                        />
                    ))}
                </ul>
            </span>
        </div>
    )
}

export default HouseList