import { useEffect, useState } from 'react';
import { callGifs } from '../helpers/callGifs';

const useFetch = (searchGifs, setNoGifs) => {
    const [callApi, setCallApi] = useState({ data: [], loading: true });

    useEffect(() => {
        setCallApi((previous) => ({ ...previous, loading: true }));
        callGifs(searchGifs, setNoGifs).then((gifs) => {
            setTimeout(() => {
                setCallApi({ data: gifs, loading: false });
            }, 1000);
        });
    }, [searchGifs, setNoGifs]);

    return { callApi };
};

export default useFetch;
