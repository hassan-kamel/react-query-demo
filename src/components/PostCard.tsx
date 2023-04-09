import React from 'react';
import { Post } from '../api/posts';
import { useNavigate } from 'react-router-dom';
type Props = {
  post: Post;
};
const PostCard = ({ post }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/posts/${post.id}`)}
      className='m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 my-4'>
      <div className='w-full p-4 bg-white dark:bg-gray-800'>
        <p className='font-medium text-indigo-500 text-md'>Article</p>
        <p className='capitalize mb-2 text-xl font-medium text-gray-800 dark:text-white'>
          {post.title}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
