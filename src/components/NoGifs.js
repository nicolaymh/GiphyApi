import React from 'react';

import '../style/Notice.css';

export const NoGifs = () => {
    return (
        <div className='container notice'>
            <div>
                <img
                    className='notice-img'
                    src='https://media1.giphy.com/media/14ooolmDKfgrO8/giphy.gif?cid=ecf05e47pykrpksz0p9j0ycdidz93a09u3gxha3fxn64411y&rid=giphy.gif&ct=g'
                    alt='gif'
                />
            </div>
        </div>
    );
};
