import React from 'react';
import PostForm from '../components/PostForm';

const PostAdd = () => {
  return (
    <div className='flex justify-center items-center min-h-screen '>
      <PostForm todo='CREATE' />
    </div>
  );
};

export default PostAdd;
