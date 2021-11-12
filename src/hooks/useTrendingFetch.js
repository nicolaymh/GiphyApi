import { useEffect, useState } from 'react';

export const useTrendingFetch = () => {
    const [trending, setTrending] = useState([]);
    const [loadingTrending, setLoadingTrending] = useState(true);

    useEffect(() => {
        trendingGifs();
    }, []);

    const trendingGifs = async () => {
        const apiKey = '4qwGARlJxOJbOxb5KId8KSYwdeopTbel';
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
        const resp = await fetch(url);
        console.log(resp);

        const { data } = await resp.json();
        console.log(data);

        const dataOrganized = data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                imageUrl: gif.images.downsized_medium.url,
                giphyInfo: gif.url,
            };
        });
        console.log(dataOrganized);

        setTrending(dataOrganized);
        setLoadingTrending(false);
    };

    return { trending, loadingTrending };
};
