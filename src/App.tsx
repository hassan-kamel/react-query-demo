import { useQuery, useMutation, useQueryClient } from 'react-query';
type post = {
  id: number | string;
  title: string;
};
const POSTS: post[] = [
  { id: 1, title: 'post one' },
  { id: 2, title: 'post two' },
  { id: 3, title: 'post three' },
];
function App() {
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  const newPostMutation = useMutation({
    mutationFn: (title: string) =>
      wait(1000).then(() =>
        POSTS.push({ id: String(crypto.randomUUID()), title }),
      ),
    onSuccess: () => {
      console.log('hi');
      queryClient.invalidateQueries(['posts']);
    },
  });
  const wait = (duration: number) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
  };

  if (postQuery.isLoading) return <h1>Loading ----- </h1>;
  if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>;

  return (
    <div>
      {postQuery.data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button onClick={() => newPostMutation.mutate('new post')}>
        add new
      </button>
    </div>
  );
}

export default App;
