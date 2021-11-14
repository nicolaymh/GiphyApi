import { useEffect, useState } from 'react';
import { callGifs } from '../helpers/callGifs';

const useFetch = (searchGifs, setNoGifts) => {
    const [callApi, setCallApi] = useState({ data: [], loading: true });

    useEffect(() => {
        setCallApi((previous) => ({ ...previous, loading: true }));
        callGifs(searchGifs, setNoGifts).then((gifs) => {
            setTimeout(() => {
                setCallApi({ data: gifs, loading: false });
            }, 1000);
        });
    }, [searchGifs, setNoGifts]);

    return { callApi };
};

export default useFetch;
