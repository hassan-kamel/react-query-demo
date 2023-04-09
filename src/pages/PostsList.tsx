import { useQuery } from 'react-query';
import { getPosts, Post } from '../api/posts';
import PostCard from '../components/PostCard';
import Loading from '../components/Loading';
const PostsList = () => {
  const {
    data: posts,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
  if (isLoading) return <Loading />;
  if (isError) return <h1>{JSON.stringify(error)}</h1>;
  return (
    <div className='flex justify-center items-center flex-wrap'>
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
