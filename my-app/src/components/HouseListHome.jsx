import HouseItem from '../components/HouseItemPreview.jsx'
import data from '../doc-kasa.json'

function HouseListHome() {
    return (
        <section className='House__List'>
            <div className='House__List--cadres'>
                {data.slice(0, 6).map((house) => (
                    <HouseItem
                        key={house.id}
                        cover={house.cover}
                        title={house.title}
                    />
                ))}
            </div>
        </section>
    )
}

export default HouseListHome