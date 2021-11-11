import { createContext, useEffect, useState } from 'react';

const TrendingContext = createContext();

const TrendingProvider = ({ children }) => {
    const [trending, setTrending] = useState([]);
    const [loadingTrending, setLoadingTrending] = useState(true);

    const trendingEndPoint = async () => {
        const url =
            'https://api.giphy.com/v1/gifs/trending?api_key=4qwGARlJxOJbOxb5KId8KSYwdeopTbel&limit=20';
        const resp = await fetch(url);
        // console.log(resp);

        const data = await resp.json();
        // console.log(data);

        const dataOrganized = [...data.data];
        console.log(dataOrganized);

        setTrending([...dataOrganized]);

        setLoadingTrending(false);
    };

    useEffect(() => {
        trendingEndPoint();
    }, []);

    const data = { trending, loadingTrending };

    return (
        <TrendingContext.Provider value={data}>
            {children}
        </TrendingContext.Provider>
    );
};

export { TrendingProvider };
export default TrendingContext;
