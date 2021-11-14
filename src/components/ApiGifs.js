import React, { useContext } from 'react';
import { CreateCards } from './CreateCards';
import CallApiContext from '../context/CallApiContext';

import '../style/CreateCards.css';
import { Loading } from './Loading';
import { NogGifts } from './NogGifts';
import Title from './Title';

export const ApiGifs = () => {
    const { loading, noGifts } = useContext(CallApiContext);

    return (
        <main>
            <div className='container'>
                <Title />

                {!noGifts ? (
                    <NogGifts />
                ) : loading ? (
                    <Loading />
                ) : (
                    <CreateCards />
                )}
            </div>
        </main>
    );
};
