export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + process.env.REACT_APP_API_KEY;
export const YOUTUBE_CHANNEL_API = (channel_ID) => `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_ID}&key=${process.env.REACT_APP_API_KEY}`;

export const OFFSET_LIVE_CHAT = 156;
export const getSearchSuggestions = (query, callback) => {
    const script = document.createElement('script');
    script.src = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(query)}&callback=handleSuggestions`;
    document.body.appendChild(script);

    window.handleSuggestions = (data) => {
        callback(data[1]); // Pass the suggestions to the callback
    };
};