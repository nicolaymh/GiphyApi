import React, { useContext } from 'react';
import { CreateCards } from './CreateCards';
import CallApiContext from '../context/CallApiContext';

import '../style/CreateCards.css';
import { Loading } from './Loading';
import { NogGifts } from './NogGifts';

export const ApiGifs = () => {
    const { searchGifs, loading, noGifts } = useContext(CallApiContext);

    return (
        <main>
            <div className='container'>
                <h1 className='title-gifs'>
                    {!searchGifs ? 'Gifs Trending' : `${searchGifs} gifs`}
                </h1>

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
