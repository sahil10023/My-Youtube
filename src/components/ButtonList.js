import React from 'react';
import Button from './Button';

const ButtonList = () => {
    const list = ['All', 'Game', 'Song', 'Cricket', 'Soccer', 'News', 'Series', 'Cooking'];
    return (
        <div className="flex overflow-x-scroll overflow-hidden whitespace-nowrap p-2 space-x-2">
            {list.map((item) => (
                <Button key={item} name={item} />
            ))}
        </div>
    );
};

export default ButtonList;
