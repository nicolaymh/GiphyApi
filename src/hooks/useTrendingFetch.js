import { useEffect, useState } from 'react';

export const useTrendingFetch = () => {
    const [trending, setTrending] = useState([]);
    const [loadingTrending, setLoadingTrending] = useState(true);

    useEffect(() => {
        trandingGifs();
    }, []);

    const trandingGifs = async () => {
        const apiKey = '4qwGARlJxOJbOxb5KId8KSYwdeopTbel';
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;
        const resp = await fetch(url);
        // console.log(resp);

        const data = await resp.json();
        // console.log(data);

        const dataOrganized = [...data.data];
        console.log(dataOrganized);

        setTrending(dataOrganized);
        setLoadingTrending(false);
    };

    return { trending, loadingTrending };
};
