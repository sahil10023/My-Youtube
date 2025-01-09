import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomnames } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const ChatMessages = useSelector(store => store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");
    // Simulating live chat using setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(
                addMessage({ name: generateRandomnames(), message: generateRandomMessage() })
            );
        }, 700);

        return () => clearInterval(interval); // cleanup function to stop the interval when component unmounts
    }, [dispatch]);

    return (<>
        <div className='ml-2 w-full h-[450px] p-2 flex flex-col-reverse overflow-y-auto border border-black scroll-smooth bg-slate-100 rounded-lg'>
            <div> {ChatMessages.map((chat, index) => <ChatMessage key={index} name={chat.name} message={chat.message} />)}</div>
        </div>
        <form className='w-full p-2 ml-2 border border-black' onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({ name: "Sahil", message: liveMessage }));
            setLiveMessage("");
        }}>
            <input className='border border-black w-96 px-2' type="text" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
            <button className='px-2 mx-2 py-1 bg-green-100' type="submit">Send</button>
        </form>
    </>
    )
}

export default LiveChat