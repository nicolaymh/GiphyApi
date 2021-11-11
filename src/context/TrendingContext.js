import { createContext } from 'react';
import { useTrendingFetch } from '../hooks/useTrendingFetch';

const TrendingContext = createContext();

const TrendingProvider = ({ children }) => {
    const { trending, loadingTrending } = useTrendingFetch();

    const data = { trending, loadingTrending };

    return (
        <TrendingContext.Provider value={data}>
            {children}
        </TrendingContext.Provider>
    );
};

export { TrendingProvider };
export default TrendingContext;
