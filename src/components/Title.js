import React, { useContext } from 'react';
import CallApiContext from '../context/CallApiContext';

import '../style/AnimatedTitlle.css';

const Title = () => {
    const { searchGifs, noGifs } = useContext(CallApiContext);

    return (
        <div className='container-title'>
            <h1 className='animated-title'>
                {!searchGifs
                    ? 'Gifs Trending'
                    : !noGifs
                    ? 'No gif found by that name'
                    : `${searchGifs} Gifs`}
            </h1>
        </div>
    );
};

export default Title;
