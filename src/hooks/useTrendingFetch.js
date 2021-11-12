import { useEffect, useState } from 'react';

export const useTrendingFetch = () => {
    const [trending, setTrending] = useState([]);
    const [loadingTrending, setLoadingTrending] = useState(true);

    const [search, setSearch] = useState('');

    useEffect(() => {
        trendingGifs();
    }, []);

    const trendingGifs = async () => {
        const apiKey = '4qwGARlJxOJbOxb5KId8KSYwdeopTbel';
        const urlTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
        const resp = await fetch(urlTrending);
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

    return { search, trending, loadingTrending };
};
