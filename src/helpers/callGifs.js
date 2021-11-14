export const callGifs = async (searchGifs, setNoGifs) => {
    const apiKey = '4qwGARlJxOJbOxb5KId8KSYwdeopTbel';
    const url = !searchGifs
        ? `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
        : `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchGifs}`;

    const resp = await fetch(url);
    console.log(resp);

    const { data } = await resp.json();
    console.log(data);

    if (data.length) {
        setNoGifs(true);
    } else {
        setNoGifs(false);
    }

    const dataOrganized = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            imageUrl: gif.images.downsized_medium.url,
            giphyInfo: gif.url,
        };
    });

    // console.log(dataOrganized);

    return dataOrganized;
};
