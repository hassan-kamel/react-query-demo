export type Post = {
  id: string | number;
  title: string;
  body: string;
};
export const getPosts = async () => {
  const response = await fetch(`http://localhost:3000/posts`);
  return response.json();
};
export const getPost = async (id: string | number) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  return response.json();
};
export const addPost = async (post: Post) => {
  const response = await fetch(`http://localhost:3000/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  return response.json();
};
export const updatePost = async (ubdatedPost: Post) => {
  const response = await fetch(
    `http://localhost:3000/posts/${ubdatedPost.id}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ubdatedPost),
    },
  );
  return response.json();
};
export const deletePost = async (id: string | number) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
