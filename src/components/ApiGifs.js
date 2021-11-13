import React, { useContext } from 'react';
import { CreateCards } from './CreateCards';
import CallApiContext from '../context/CallApiContext';

import '../style/CreateCards.css';
import { Loading } from './Loading';

export const ApiGifs = () => {
    const { loading } = useContext(CallApiContext);

    return (
        <main>
            <div className='container'>
                <h1 className='title-trending'>Gif Trending</h1>

                {loading ? <Loading /> : <CreateCards />}
            </div>
        </main>
    );
};
