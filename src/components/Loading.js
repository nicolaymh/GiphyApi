import React from 'react';

import '../style/Loading.css';

export const Loading = () => {
    return (
        <div className='container loading'>
            <div className=''>
                <img
                    className='loading-img'
                    src='https://media2.giphy.com/media/3y0oCOkdKKRi0/giphy.gif?cid=ecf05e47tt5p5qurj6ipfbtstps53cxajfxj02vnwauqwi1y&rid=giphy.gif&ct=g'
                    alt='gif'
                ></img>
            </div>
        </div>
    );
};
