import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>TodoSage </span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>
          <Link to="/">Home</Link>
        </li>
        <li className='cursor-pointer hover:font-bold transition-all'>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
