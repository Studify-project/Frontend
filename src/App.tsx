import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import CommunityPage from './pages/CommunityPage';
import GroupPage from './pages/GroupPage';
import TimerPage from './pages/TimerPage';
import TodoPage from './pages/TodoPage';
import TimelinePage from './pages/TimelinePage';
import ChallengePage from './pages/ChallengePage';
import FriendListPage from './pages/FriendListPage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/my',
    element: <MyPage />,
  },
  {
    path: '/community',
    element: <CommunityPage />,
  },
  {
    path: '/group',
    element: <GroupPage />,
  },
  {
    path: '/timer',
    element: <TimerPage />,
  },
  {
    path: '/todo',
    element: <TodoPage />,
  },
  {
    path: '/timeline',
    element: <TimelinePage />,
  },
  {
    path: '/challenge',
    element: <ChallengePage />,
  },
  {
    path: '/friends',
    element: <FriendListPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;