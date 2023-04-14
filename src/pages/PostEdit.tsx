import React from 'react';
import PostForm from '../components/PostForm';
import { useParams } from 'react-router-dom';

const PostEdit = () => {
  const { id } = useParams();
  return (
    <div className='flex justify-center items-center min-h-screen '>
      <PostForm todo='UPDATE' />
    </div>
  );
};

export default PostEdit;
