import React, { useContext } from 'react';
import TrendingContext from '../context/TrendingContext';
import { CreateCards } from './CreateCards';

export const ApiTrending = () => {
    const { loadingTrending } = useContext(TrendingContext);

    return (
        <div>
            <h1>Trayendo API</h1>

            {loadingTrending ? <h2>Loading...</h2> : <CreateCards />}
        </div>
    );
};
