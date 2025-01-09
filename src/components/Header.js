import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { getSearchSuggestions } from '../utils/constents';
import { cacheResults } from '../utils/searchSlice';


const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [Suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handelMenuToggle = () => {
        dispatch(toggleMenu());
    }

    const searchCache = useSelector(store => store.search);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]); // Use cached results from store if available
            } else {
                getSearchSuggestions(searchQuery, (results) => {
                    setSuggestions(results);
                    dispatch(cacheResults({
                        [searchQuery]: results
                    })); // Store results in Store
                });
            }
        }, 200);

        return () => clearTimeout(timer); // Cleanup function to clear the timer
    }, [searchQuery]);


    return (
        <div className="grid grid-flow-col p-2 my-4 shadow-lg">
            {/* Left Section */}
            <div className="flex col-span-1">
                <img
                    className="h-8 p-2 m-2 mix-blend-multiply rounded-full hover:border"
                    onClick={() => handelMenuToggle()}
                    alt="Menu icon"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5sEeuOGh3rChJXr2ljYzY0Vo10Qr9Y5JAA&s"
                />
                <img
                    className="h-12"
                    src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                    alt="yt logo"
                />
            </div>

            {/* Search Section */}
            <div className="col-span-10 text-center relative">
                <div className="flex justify-center items-center">
                    <input
                        type="text"
                        className="p-2 border rounded-l-full border-gray-600 w-1/2 focus:outline-none md:w-1/2 pl-3"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search"
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => {
                            setTimeout(() => {
                                setShowSuggestions(false);
                            },75); // Adjust the delay as needed
                        }}
                    />
                    <button className="border border-gray-700 p-2 rounded-r-full hover:bg-gray-100">
                        🔍
                    </button>
                </div>

                {/* Search Suggestions */}
                {showSuggestions && (
                    <div className="absolute left-1/2 transform md:-translate-x-[53%] -translate-x-[56%] mt-[0.3rem] w-1/2 md:w-1/2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        <ul className="text-left">
                            {Suggestions?.map((suggestion) => <li key={suggestion} onClick={() => setSearchQuery(suggestion)} className="p-2 hover:bg-gray-100 cursor-pointer">🔍 {suggestion}</li>)}
                        </ul>
                    </div>
                )}
            </div>

            {/* Right Section */}
            <div className="col-span-1 hidden md:flex justify-center items-center">
                <img
                    className="h-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
                    alt="user Logo"
                />
            </div>
        </div>
    );

}

export default Header