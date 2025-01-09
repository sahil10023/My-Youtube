import React from 'react';

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center shadow-sm py-2'>
            <div className='w-7 h-7 flex items-center justify-center text-white bg-red-800 rounded-full'>
                {name?.charAt(0)}
            </div>
            <span className='font-bold px-2 break-all'>{name}:</span>
            <span className='break-all'>{message}</span>
        </div>
    );
};

export default ChatMessage;
