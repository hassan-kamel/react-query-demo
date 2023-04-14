import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPost } from '../api/posts';
import Loading from '../components/Loading';
const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: post,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => id && getPost(id),
  });

  if (isLoading) return <Loading />;
  if (isError) return <h1>{JSON.stringify(error)}</h1>;
  return (
    <div className='bg-white dark:bg-gray-800 w-full min-h-screen mx-auto p-8'>
      <h2 className='text-7xl my-8 font-medium text-indigo-500 text-md text-center capitalize'>
        {post.title || '404'}
      </h2>
      <p className='text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl'>
        <span className='font-bold text-indigo-500'>“</span>
        {post.body || "You're alone here"}
        <span className='font-bold text-indigo-500'>”</span>
      </p>
      <div className='flex gap-2'>
        <button
          onClick={() => navigate(`/posts/${post.id}/update`)}
          type='button'
          className='py-2 px-4 flex justify-center items-center  bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg '>
          <svg
            clipRule='evenodd'
            fillRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z'
              fillRule='nonzero'
            />
          </svg>
        </button>
        <button
          type='button'
          className='py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg '>
          <svg
            clipRule='evenodd'
            fillRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z'
              fillRule='nonzero'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
