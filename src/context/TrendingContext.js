import { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

const TrendingContext = createContext();

const TrendingProvider = ({ children }) => {
    const [inputSearch, setInputSearch] = useState('');
    const [searchGifs, setSearchGifs] = useState('');

    const { callApi } = useFetch(searchGifs);
    const { data, loading } = callApi;

    const info = { data, loading };

    return (
        <TrendingContext.Provider value={info}>
            {children}
        </TrendingContext.Provider>
    );
};

export { TrendingProvider };
export default TrendingContext;
