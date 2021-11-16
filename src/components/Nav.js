import React, { useContext } from 'react';
import CallApiContext from '../context/CallApiContext';

import '../style/Nav.css';

export const Nav = () => {
    const { handleInputSearch, handleChange, inputSearch } =
        useContext(CallApiContext);

    return (
        <nav>
            <div className='container container-nav'>
                <div>
                    <img src='' alt='img-portada' />
                </div>
                <div className='nav-contenedor-img'>
                    <img
                        className='img-avatar'
                        src='https://media2.giphy.com/media/gVoBC0SuaHStq/giphy.gif?cid=ecf05e47q8zqohqieltne1rbsclysx1k7evjv3k237c99lfq&rid=giphy.gif&ct=g'
                        alt='gif-nav'
                    />
                </div>
                <form onSubmit={handleInputSearch}>
                    <input
                        type='text'
                        onChange={handleChange}
                        value={inputSearch}
                    />
                </form>
            </div>
        </nav>
    );
};
