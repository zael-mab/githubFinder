import React from 'react'

const ProgressBar = () => {
  return (
    <div className='flex items-center justify-center'>
        <progress className='w-3/5 bg-indigo-400 border border-indigo-500 md:1/3 progress' />
    </div>
  );
};

export default ProgressBar;
