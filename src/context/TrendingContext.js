import { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

const TrendingContext = createContext();

const TrendingProvider = ({ children }) => {
    const [inputSearch, setInputSearch] = useState('');
    const [searchGifs, setSearchGifs] = useState('');

    const { callApi } = useFetch(searchGifs);
    const { data, loading } = callApi;

    const handleInputSearch = (e) => {
        e.preventDefault();
        setSearchGifs(inputSearch);
    };
    const handleChange = ({ target }) => {
        setInputSearch(target.value);
    };

    const props = {
        data,
        loading,
        handleInputSearch,
        handleChange,
        inputSearch,
    };

    return (
        <TrendingContext.Provider value={props}>
            {children}
        </TrendingContext.Provider>
    );
};

export { TrendingProvider };
export default TrendingContext;
