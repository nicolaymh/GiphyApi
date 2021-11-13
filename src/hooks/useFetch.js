import { useEffect, useState } from 'react';
import { callGifs } from '../helpers/callGifs';

const useFetch = (searchGifs) => {
    const [callApi, setCallApi] = useState({ data: [], loading: true });

    useEffect(() => {
        callGifs(searchGifs).then((gifs) => {
            setTimeout(() => {
                setCallApi({ data: gifs, loading: false });
            }, 1000);
        });
    }, [searchGifs]);

    return { callApi };
};

export default useFetch;
