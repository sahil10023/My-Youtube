import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All", "Game", "Song", "Cricket", "Soccer", "News", "Series", "Cooking"];
    return (
        <div className='flex'>
            {list.map(list => <Button name={list} />)}
        </div>
    )
}

export default ButtonList