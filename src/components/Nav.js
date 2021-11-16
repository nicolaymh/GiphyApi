import React, { useContext } from 'react';
import CallApiContext from '../context/CallApiContext';

import '../style/Nav.css';

export const Nav = () => {
    const { handleInputSearch, handleChange, inputSearch } =
        useContext(CallApiContext);

    return (
        <nav className='nav'>
            <div className='container container-nav'>
                <img
                    className='cover-img'
                    src='https://miro.medium.com/max/1400/1*tYt2BjbGzTo97IkADUNMGw.gif'
                    alt='img-portada'
                />
                <form
                    className='form-nav gradient-border'
                    onSubmit={handleInputSearch}
                >
                    <input
                        className='input-nav'
                        type='text'
                        onChange={handleChange}
                        value={inputSearch}
                        placeholder='Search Gifs'
                    />
                    <button className='nav-button' type='submit'>
                        <img
                            className='img-button'
                            src='https://media2.giphy.com/media/0GsNMsRwDKKMjiwIe5/200w.webp?cid=ecf05e476ulngzl3gl6hehucmgcvdvdvsiiogvcuhzo63cu5&rid=200w.webp&ct=g'
                        />
                    </button>
                </form>
            </div>
        </nav>
    );
};
