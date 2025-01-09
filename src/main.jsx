import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import NotFound from './components/NotFound.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoDetails from './pages/VideoDetails.jsx';
import ChannelModal from './components/modals/ChannelModal.jsx';
import axios from 'axios';
import store from './store/store.js';
import { Provider } from 'react-redux';

axios.defaults.baseURL = 'https://youtube-replica-backend.vercel.app';
axios.defaults.withCredentials = true;

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/watch/:id',
        element: <VideoDetails />,
      },
    ],
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/createChannel',
    element: <ChannelModal />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
