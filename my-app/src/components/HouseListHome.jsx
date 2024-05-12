import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import HouseItem from '../components/HouseItemPreview.jsx'
import data from '../doc-kasa.json'

function HouseListHome() {
    const navigate = useNavigate();
    const [selectedHouse, setSelectedHouse] = useState(null);

    const handleClick = (id) => {
        setSelectedHouse(id);
    };

    useEffect(() => {
        if (selectedHouse !== null) {
            setTimeout(() => {
                navigate(`/Fiche/${selectedHouse}`);
            }, 500); // pas + ça fait bug
        }
    }, [selectedHouse, navigate]);

    return (
        <AnimatePresence>
            {selectedHouse === null && (
                <motion.section
                    className='House__List'
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    exit={{ x: '100vw' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='House__List--cadres'>
                        {data.slice(0, 6).map((house) => (
                            <HouseItem
                                key={house.id}
                                cover={house.cover}
                                title={house.title}
                                layoutId={`house-${house.id}`}
                                onClick={() => handleClick(house.id)}
                            />
                        ))}
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}

export default HouseListHome