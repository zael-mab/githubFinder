import React from 'react';

const HowToUse = () => {
    return (
      <div className='text-white rounded-md lg:w-3/5'>
        
        <div className='p-2 rounded-lg shadow-lg md:p-8 shadow-gray-800'>
          <h1 className='mb-4 text-xl font-semibold text-indigo-400 md:text-2xl'>GitHub User Finder</h1>
          <p className='mb-6 text-gray-200 text-md md:text-xl'>
            Easily search for GitHub users and explore their profiles and repositories.
          </p>
  
          <div className='mb-6'>
            <h2 className='mb-2 text-lg font-semibold text-gray-300 md:text-xl'>How to Use:</h2>
            <ol className='text-sm list-inside md:text-lg'>
              <li className='mb-2'>
                <span className='font-semibold text-gray-200 badge md:badge-lg'>Search User:</span> Enter a GitHub username in the search bar. Click &quot;Search&quot; or press &quot;Enter&quot;.
              </li>
              <li className='mb-2'>
                <span className='font-semibold text-gray-200 badge md:badge-lg'>View Profile:</span> User profiles display avatar, name, bio, followers, following, and location. Click &quot;View Profile&quot; to visit their GitHub page.
              </li>
              <li className='mb-2'>
                <span className='font-semibold text-gray-200 badge md:badge-lg'>Explore Repositories:</span> See the user&apos;s public repositories and their details. Click a repository name to view it on GitHub.
              </li>
            </ol>
          </div>
  
          <div className='mb-6'>
            <h2 className='mb-2 font-semibold text-gray-300 md:text-xl text-md'>Tips:</h2>
            <ul className='text-sm list-disc list-inside md:text-lg'>
              <li className='mb-2'>Enter the correct GitHub username for accurate results.</li>
              <li className='mb-2'>Be aware of GitHub API rate limits.</li>
            </ul>
          </div>
  
          <div className='mb-6'>
            <h2 className='mb-2 font-semibold text-gray-300 md:text-xl text-md'>Tech Stack:</h2>
            <ul className='text-sm list-disc list-inside md:text-lg'>
              <li className='mb-2'>Built with React and Next.js.</li>
              <li className='mb-2'>Fetches data using the GitHub API.</li>
              <li className='mb-2'>Styled with CSS and Tailwind CSS.</li>
            </ul>
          </div>
  
          <div>
            <span>Happy GitHub user searching !</span>
          </div>
        </div>
      </div>
    );
  };
  
export default HowToUse;