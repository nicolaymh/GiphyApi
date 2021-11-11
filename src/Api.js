import React, { useContext } from 'react';
import TrendingContext from './context/TrendingContext';

export const Api = () => {
    const { trending, loadingTrending } = useContext(TrendingContext);

    return (
        <div>
            <h1>Trayendo API</h1>

            {loadingTrending ? (
                <h2>Loading...</h2>
            ) : (
                trending.map((img, index) => (
                    <img
                        key={index}
                        src={img.images.downsized_medium.url}
                        alt='gif'
                    />
                ))
            )}
        </div>
    );
};
