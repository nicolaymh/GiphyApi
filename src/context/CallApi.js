import { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

const callApiContext = createContext();

const callApiProvider = ({ children }) => {
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
        <callApiContext.Provider value={props}>
            {children}
        </callApiContext.Provider>
    );
};

export { callApiProvider };
export default callApiContext;
