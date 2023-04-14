import React, { useEffect, useState } from 'react';
import reactQuery from '../assets/react-query.svg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpend, setMenuOpend] = useState(false);
  const location = useLocation();
  const urlArray = location.pathname.split('/');
  console.log('urlArray: ', urlArray);
  useEffect(() => {
    setMenuOpend(false);
  }, [location.pathname]);

  const active =
    'text-gray-800 dark:text-blue-500 hover:text-gray-800 dark:hover:text-indigo-500';
  const inActive =
    'text-gray-300 hover:text-gray-800 dark:hover:text-indigo-500';

  return (
    <div>
      <nav className='bg-white dark:bg-gray-800  fixed top-0 left-0 right-0'>
        <div className='px-8 mx-auto max-w-7xl'>
          <div className='flex items-center justify-between h-16'>
            <div className=' flex items-center'>
              <Link className='flex-shrink-0' to='/'>
                <img className='w-28 h-28' src={reactQuery} alt='Workflow' />
              </Link>
              <div className='hidden md:block'>
                <div className='flex items-baseline ml-10 space-x-4'>
                  <Link
                    className={`${
                      urlArray.length === 3 ? inActive : active
                    } px-3 py-2 rounded-md text-sm font-medium`}
                    to='/posts'>
                    Posts
                  </Link>
                  <Link
                    className={`${
                      urlArray.length === 2 ? inActive : active
                    } px-3 py-2 rounded-md text-sm font-medium`}
                    to='/posts/create'>
                    Create Post
                  </Link>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='flex items-center ml-4 md:ml-6'></div>
            </div>
            <div
              className='flex -mr-2 md:hidden'
              onClick={() => setMenuOpend(!menuOpend)}>
              <button className='text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none'>
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  className='w-8 h-8'
                  viewBox='0 0 1792 1792'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden shadow-lg transition-transform transform origin-top  ${
            menuOpend ? '' : 'scale-y-0'
          } absolute  top-[105%] w-3/4 left-[12.5%] rounded bg-yellow-950`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 `}>
            <Link
              className={`block ${
                urlArray.length === 3 ? inActive : active
              } px-3 py-2 rounded-md text-sm font-medium`}
              to='/posts'>
              Posts
            </Link>
            <Link
              className={`block ${
                urlArray.length === 2 ? inActive : active
              } px-3 py-2 rounded-md text-sm font-medium`}
              to='/posts/create'>
              Create Post
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
