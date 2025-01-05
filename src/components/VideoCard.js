import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_API } from '../utils/constents';

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const [channelLogo, setChannelLogo] = useState(null);

    const uploadTime = new Date(snippet.publishedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const getChannelImg = async () => {
        const data = await fetch(YOUTUBE_CHANNEL_API(snippet?.channelId));
        const json = await data.json();
        setChannelLogo(json.items[0].snippet.thumbnails.default.url)
    }

    useEffect(() => {
        getChannelImg();
    }, [])
    return (
        <div className="p-2 m-2 max-w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
                <img
                    className="w-full h-auto rounded-t-lg"
                    src={thumbnails.medium.url}
                    alt={title}
                />
            </div>
            <div className="flex p-4">
                {channelLogo && <img
                    className="w-10 my-auto h-10 rounded-full mr-4 -ml-3"
                    src={channelLogo}
                    alt={channelTitle}
                />}
                <div className="flex flex-col justify-between">
                    <h3 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-xs my-1 text-gray-600">{channelTitle}</p>
                    <p className="text-xs text-gray-600">
                        {statistics.viewCount} views  •  {uploadTime}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard