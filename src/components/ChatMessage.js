import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center shadow-sm py-2'>
            <div className='w-7 my-auto h-7 mt-1  text-white bg-red-800 text-center rounded-full' fill='none' >
                {name?.charAt(0)}
            </div>
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage