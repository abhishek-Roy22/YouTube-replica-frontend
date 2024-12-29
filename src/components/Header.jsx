import { CircleUserRound, Menu, MenuIcon, Search, XIcon } from 'lucide-react';
import Logo from '../assets/youtube.png';
import { Link } from 'react-router-dom';

const Header = ({ onClick }) => {
  return (
    <header className="bg-gray-900 sticky top-0 p-4 border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={() => onClick()}>
            <Menu color="white" />
          </button>
          <div className="text-white text-2xl font-bold flex items-center gap-2">
            <img src={Logo} alt="logo" width={50} />
            <span>YouTube</span>
          </div>
        </div>
        <div className="hidden md:block flex-1 max-w-2xl mx-4">
          <div className="relative overflow-hidden">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 bg-slate-800 border-2 border-slate-400 rounded-full pr-12 focus:outline-none focus:border-blue-500 text-slate-100 font-bold"
            />
            <button className="absolute right-0 top-0 h-full px-4 hover:bg-slate-400 rounded-r-full border-l">
              <Search className="w-5 h-5" color="grey" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="flex items-center border border-sky-500 py-2 px-3 bg-sky-300 gap-1 rounded-2xl cursor-pointer"
          >
            <CircleUserRound />
            <span>Sign in</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
