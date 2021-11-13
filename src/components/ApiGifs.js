import React, { useContext } from 'react';
import { CreateCards } from './CreateCards';
import CallApiContext from '../context/CallApiContext';

import '../style/CreateCards.css';

export const ApiGifs = () => {
    const { loading } = useContext(CallApiContext);

    return (
        <main>
            <div className='container'>
                <h1 className='title-trending'>Gif Trending</h1>

                {loading ? (
                    <h2 style={{ color: 'white' }}>Loading...</h2>
                ) : (
                    <CreateCards />
                )}
            </div>
        </main>
    );
};
