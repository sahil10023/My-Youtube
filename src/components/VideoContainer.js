import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constents';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState(null);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setVideos(json.items);
    }
    useEffect(() => {
        getVideos();
    }, []);
    return (
        <div className='flex flex-wrap'>
            {videos?.map((video) => <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info={video} /></Link>)}
        </div>
    )
}

export default VideoContainer