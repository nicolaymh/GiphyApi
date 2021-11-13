import React, { useContext } from 'react';
import { DrawCard } from './DrawCard';

import '../style/AnimatedBorder.css';
import CallApiContext from '../context/CallApiContext';

export const CreateCards = () => {
    const { data } = useContext(CallApiContext);

    return (
        <div className='cards'>
            {data.map((gif) => (
                <DrawCard key={gif.id} {...gif} />
            ))}
        </div>
    );
};
