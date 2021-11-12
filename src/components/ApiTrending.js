import React, { useContext } from 'react';
import TrendingContext from '../context/TrendingContext';
import { CreateCards } from './CreateCards';

import '../style/CreateCards.css';

export const ApiTrending = () => {
    const { loading } = useContext(TrendingContext);

    return (
        <main>
            <div className='container'>
                <h1 className='title-trending'>Gif Trending</h1>

                {loading ? <h2>Loading...</h2> : <CreateCards />}
            </div>
        </main>
    );
};
