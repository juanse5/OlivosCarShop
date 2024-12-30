// IconDisplay.jsx
import React from 'react';
import { FontAwesomeIcon } from '../icons/Icons.js';

const IconDisplay = ({ vehicleTypes, iconsToShow }) => {
    return (
        <div className="icons-container">
            {iconsToShow.map((icon, index) => (
                icon && (
                    <FontAwesomeIcon
                        key={index}
                        icon={icon}
                        className={vehicleTypes[index]}
                        id="icons-id"
                    />
                )
            ))}
        </div>
    );
};

export default IconDisplay;