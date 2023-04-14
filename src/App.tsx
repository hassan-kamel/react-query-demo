import { Route, Routes, Navigate } from 'react-router-dom';
import PostsList from './pages/PostsList';
import PostDetails from './pages/PostDetails';
import PostAdd from './pages/PostAdd';
import PostEdit from './pages/PostEdit';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='min-h-screen flex justify-center items-center px-2'>
      <Navbar />
      <Routes>
        <Route path='/posts' element={<PostsList />} />
        <Route path='/posts/:id' element={<PostDetails />} />
        <Route path='/posts/create' element={<PostAdd />} />
        <Route path='/posts/:id/update' element={<PostEdit />} />
        <Route path='*' element={<Navigate to={'/posts'} />} />
      </Routes>
    </div>
  );
}

export default App;
