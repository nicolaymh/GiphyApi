import React, { useContext } from 'react';
import TrendingContext from '../context/TrendingContext';

export const Nav = () => {
    const { handleInputSearch, handleChange, inputSearch } =
        useContext(TrendingContext);

    return (
        <nav>
            <form onSubmit={handleInputSearch}>
                <input
                    type='text'
                    onChange={handleChange}
                    value={inputSearch}
                />
            </form>
        </nav>
    );
};
