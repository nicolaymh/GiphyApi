import React, { useContext } from 'react';
import CallApiContext from '../context/CallApiContext';

export const Nav = () => {
    const { handleInputSearch, handleChange, inputSearch } =
        useContext(CallApiContext);

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
