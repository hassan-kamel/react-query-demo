import React, { FormEvent, useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Post, addPost, getPost, updatePost } from '../api/posts';
import { useParams, useNavigate } from 'react-router-dom';

type PostForm = {
  todo: 'CREATE' | 'UPDATE';
};

const PostForm = ({ todo }: PostForm) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const { data: postWillUpdate } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => id && getPost(id),
  });
  useEffect(() => {
    if (!postWillUpdate) return;
    console.log('postWillUpdate: ', postWillUpdate);
    setTitle(postWillUpdate.title);
    setBody(postWillUpdate.body);
  }, [postWillUpdate]);
  const addPostMutation = useMutation({
    mutationKey: ['posts', 'add'],
    mutationFn: addPost,
  });

  const updatePostMutation = useMutation({
    mutationKey: ['posts', 'update', id],
    mutationFn: updatePost,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !body) return;
    const newPost: Post = {
      id: id || crypto.randomUUID(),
      title: title,
      body: body,
    };
    console.log('newPost: ', newPost);
    if (todo === 'CREATE') addPostMutation.mutate(newPost);
    else updatePostMutation.mutate(newPost);
    navigate('/posts');
  };
  return (
    <form className='flex w-full max-w-sm space-x-3' onSubmit={handleSubmit}>
      <div className='w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800'>
        <div className='mb-6 text-3xl font-light text-center text-gray-800 dark:text-white'>
          Add Post
        </div>
        <div className='grid max-w-xl grid-cols-2 gap-4 m-auto'>
          <div className='col-span-2 lg:col-span-1'>
            <div className=' relative '>
              <input
                type='text'
                id='contact-form-name'
                className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1'></div>
          <div className='col-span-2'>
            <label className='text-gray-700' htmlFor='name'>
              <textarea
                className='flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                id='comment'
                placeholder='Enter your Body'
                name='comment'
                rows={5}
                cols={40}
                value={body}
                onChange={(e) => setBody(e.currentTarget.value)}></textarea>
            </label>
          </div>
          <div className='col-span-2 text-right'>
            <button
              type='submit'
              className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
              {todo === 'CREATE' ? 'Create' : 'Update'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
