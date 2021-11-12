import React, { useContext } from 'react';
import TrendingContext from '../context/TrendingContext';
import { DrawCard } from './DrawCard';

import '../style/AnimatedBorder.css';

export const CreateCards = () => {
    const { data } = useContext(TrendingContext);

    return (
        <div className='cards'>
            {data.map((gif) => (
                <DrawCard key={gif.id} {...gif} />
            ))}
        </div>
    );
};
