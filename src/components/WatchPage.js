import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    console.log(searchParams);

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className='px-5'>
            <iframe
                width="1000"
                height="450"
                src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1&rel=0"`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
        </div>
    )
}

export default WatchPage