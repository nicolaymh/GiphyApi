import React from 'react';

export const DrawCard = ({ title, imageUrl, giphyInfo }) => {
    return (
        <div className='card-info'>
            <div className='container-img'>
                <a href={giphyInfo}>
                    <img className='img' src={imageUrl} alt={`gif-${title}`} />
                </a>
            </div>
        </div>
    );
};
