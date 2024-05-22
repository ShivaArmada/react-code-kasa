import './../styles/Fiche.scss';
import { useParams, useNavigate } from 'react-router-dom';
import HouseItem from './../components/HouseItem.jsx';
import data from '../doc-kasa.json';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useEffect } from 'react';

function Fiche() {
    const navigate = useNavigate();
    const id = useParams().id;
    const house = data.find(house => house.id === id);

    useEffect(() => {
        if (!house) {
            navigate('/not-found');
        }
    }, [house, navigate]);

    if (!house) {
        return null;
    }

    return (
        <div className="body">
            <header className="header">
                <Header />
            </header>
            <div>
                <HouseItem {...house} isFichePage />
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Fiche;