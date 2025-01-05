import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();

    const handelMenuToggle = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col p-2 my-4 shadow-lg'>
            <div className='flex col-span-1'>
                <img className='h-8 p-2 m-2 mix-blend-multiply rounded-full hover:border' onClick={() => handelMenuToggle()} alt='Menu icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5sEeuOGh3rChJXr2ljYzY0Vo10Qr9Y5JAA&s'></img>
                <img className='h-12' src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="yt logo" />
            </div>
            <div className='col-span-10 text-center'>
                <input type="text" className='p-2 border rounded-l-full border-gray-600 w-1/2 roun' />
                <button className='border border-gray-700 p-2 rounded-r-full hover:bg-gray-100'>🔍</button>
            </div>
            <div className='col-span-1'>
                <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s" alt="user Logo" />
            </div>
        </div>
    )
}

export default Header