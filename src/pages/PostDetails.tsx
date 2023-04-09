import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPost } from '../api/posts';
import Loading from '../components/Loading';
const PostDetails = () => {
  const { id } = useParams();
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
    </div>
  );
};

export default PostDetails;
