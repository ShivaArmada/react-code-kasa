import './../styles/Fiche.scss';
import { useParams, useNavigate } from 'react-router-dom';
import HouseItem from './../components/HouseItem.jsx';
import data from '../doc-kasa.json';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Fiche() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the house with the matching id
    const house = data.find(house => house.id === id);

    if (!house || !house.id) {
        navigate('*');
        return null;
    }

    return (
        <div className="body">
            <header className="header">
                <Header />
            </header>
            <div layoutId={`house-${id}`}>
                <HouseItem {...house} />
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Fiche;