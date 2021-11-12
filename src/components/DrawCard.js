import React from 'react';

export const DrawCard = ({ title, imageUrl, giphyInfo }) => {
    return (
        <div className='card-info gradient-border'>
            <div className='container-img'>
                <a href={giphyInfo} target='_blank' rel='noreferrer'>
                    <img className='img' src={imageUrl} alt={`gif-${title}`} />
                </a>
            </div>
        </div>
    );
};
