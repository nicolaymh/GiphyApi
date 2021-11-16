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
                <form className='form-nav' onSubmit={handleInputSearch}>
                    <input
                        className='input-nav'
                        type='text'
                        onChange={handleChange}
                        value={inputSearch}
                    />
                </form>
            </div>
        </nav>
    );
};
