import './../styles/Fiche.scss';
import HouseItem from './../components/HouseItem.jsx';

function Fiche() {
    // On passe les props à HouseItem
    const houseProps = {
        id: "1",
        cover: "https://www.tourmag.com/photo/art/grande/36954-1.jpg?v=1600862926",
        title: "House Title",
        description: "House Description",
        host: {
            name: "Host Name",
            picture: "https://www.tourmag.com/photo/art/grande/36954-1.jpg?v=1600862926"
        },
        rating: 5,
        location: "House Location",
        equipments: ["Equipment 1", "Equipment 2", "Equipment 3"],
        tags: ["Tag 1", "Tag 2", "Tag 3"]
    };

    return (
        <div className="App">
            <h1>House Fiche</h1>
            <HouseItem {...houseProps} />
        </div>
    );
}

export default Fiche;