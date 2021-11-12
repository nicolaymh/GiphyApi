import React from 'react';

export const Search = () => {
    return (
        <nav className='nav'>
            <form className='container'>
                    
                <input
                    type='text'
                    name='search'
                    placeholder='search gifs'
                    autoComplete='off'
                    //     onChange={handleInputChange}
                    //     value={search}
                />
            </form>
        </nav>
    );
};
