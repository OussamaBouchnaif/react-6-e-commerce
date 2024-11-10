import React from 'react';
import { HashLoader } from 'react-spinners';
import '@/app/styles/Loader.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="pulse">
                <HashLoader
                    color="#01bf63"
                    size={50}
                    speedMultiplier={0.7}
                />
            </div>
        </div>
    );
};

export default Loader;