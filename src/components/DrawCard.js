import React from 'react';

export const DrawCard = ({ title, imageUrl }) => {
    return (
        <div className='card-info'>
            <div className='container-img'>
                <img className='img' src={imageUrl} alt={`img-${title}`} />
            </div>
        </div>
    );
};
