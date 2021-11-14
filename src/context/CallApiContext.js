import { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

const CallApiContext = createContext();

const CallApiProvider = ({ children }) => {
    const [inputSearch, setInputSearch] = useState('');
    const [searchGifs, setSearchGifs] = useState('');
    const [noGifs, setNoGifs] = useState(true);

    const { callApi } = useFetch(searchGifs, setNoGifs);
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
        searchGifs,
        noGifs,
    };

    return (
        <CallApiContext.Provider value={props}>
            {children}
        </CallApiContext.Provider>
    );
};

export { CallApiProvider };
export default CallApiContext;
