import React, { useContext } from 'react';
import TrendingContext from '../context/TrendingContext';

export const CreateCards = () => {
    const { trending } = useContext(TrendingContext);

    return (
        <main>
            <div className='container cards'>
                {trending.map((gif) => (
                    <img
                        key={gif.id}
                        src={gif.images.downsized_medium.url}
                        alt={gif.title}
                    />
                ))}
            </div>
        </main>
    );
};

//
