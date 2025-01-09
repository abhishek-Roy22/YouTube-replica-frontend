import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyToken } from './slices/authSlice';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 400) {
        setIsOpen(true);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Calling handler right away so state gets updated with initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dispatch(verifyToken());
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header onClick={handleToggle} />
      <div className="flex gap-2">
        <Sidebar isOpen={isOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
