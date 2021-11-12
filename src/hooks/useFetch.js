import { useEffect, useState } from 'react';
import { callGifs } from '../helpers/callGifs';

const useFetch = (searchGifs) => {
    const [callApi, setCallApi] = useState({ data: [], loading: true });

    useEffect(() => {
        callGifs(searchGifs).then((gifs) =>
            setCallApi({ data: gifs, loading: false }),
        );
    }, [searchGifs]);

    return { callApi };
};

export default useFetch;
