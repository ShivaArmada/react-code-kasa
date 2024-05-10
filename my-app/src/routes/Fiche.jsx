import './../styles/Fiche.scss';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import HouseFichePreview from './../components/HouseFichePreview.jsx';
import data from '../doc-kasa.json';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Fiche() {
    const { id } = useParams();

    // Find the house with the matching id
    const house = data.find(house => house.id === id);

    if (!house) {
        return <div>House not found</div>;
    }

    return (
        <div className="body">
            <header className="header">
                <Header />
            </header>
            <h1>House Fiche</h1>
            <motion.div layoutId={`house-${id}`}>
                <HouseFichePreview {...house} />
            </motion.div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Fiche;