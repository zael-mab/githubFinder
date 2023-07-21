import React from "react";

const SearchBar = (
    {
        textInput,
        handleChange
    }: 
    {
        textInput: string,
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }) => {
        
        return (
        <div className='relative items-center col-span-2 col-start-1 py-2 mb-4 border-b border-indigo-400'>
            <input
                type='text'
                className='w-full pl-5 text-black bg-gray-200 border-indigo-400 pr-28 md:pr-40 input input-slg'
                placeholder='Search'
                value={textInput}
                onChange={handleChange}
                />
                <button
                className='absolute right-0 w-24 text-white bg-indigo-400 border-indigo-500 rounded-l-none top-2 md:w-36 btn hover:bg-indigo-500 hover:text-gray-200 hover:border-none'
                type='submit'
                >
                    Go
                </button>
        </div>
        );
};

export default SearchBar;