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

    return (<div className='flex flex-col w-full'>
        <div className='px-5 flex w-full'>
            <div>
                <iframe
                    width="1000"
                    height="450"
                    src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1&rel=0"`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <div className='w-full'>
                <LiveChat />
            </div>
        </div>
        <CommentsContainer />
    </div>
    )
}

export default WatchPage