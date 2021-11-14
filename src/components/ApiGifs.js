import React, { useContext } from 'react';
import { CreateCards } from './CreateCards';
import CallApiContext from '../context/CallApiContext';

import '../style/CreateCards.css';
import { Loading } from './Loading';
import { NoGifs } from './NoGifs';
import Title from './Title';

export const ApiGifs = () => {
    const { loading, noGifs } = useContext(CallApiContext);

    return (
        <main>
            <div className='container'>
                <Title />

                {!noGifs ? <NoGifs /> : loading ? <Loading /> : <CreateCards />}
            </div>
        </main>
    );
};
