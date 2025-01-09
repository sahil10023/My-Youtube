import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row w-full px-2 lg:px-5">
                <div className="w-full h-[273px] md:h-auto lg:w-2/3 aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-full md:w-full md:h-full"
                        src={`https://www.youtube.com/embed/${searchParams.get('v')}?autoplay=1&rel=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full lg:w-1/3 mt-2 lg:mt-0 lg:ml-4">
                    <LiveChat />
                </div>
            </div>
            <div className="px-2 lg:px-5 mt-4">
                <CommentsContainer />
            </div>
        </div>
    );
};

export default WatchPage