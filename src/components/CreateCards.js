import React, { useContext } from 'react';
import TrendingContext from '../context/TrendingContext';
import { DrawCard } from './DrawCard';

import '../style/AnimatedBorder.css';

export const CreateCards = () => {
    const { trending } = useContext(TrendingContext);

    return (
        <div className='cards'>
            {trending.map((gif) => (
                <DrawCard key={gif.id} {...gif} />
            ))}
        </div>
    );
};
