import { NavLink } from 'react-router-dom';

function Navbar() {
  const isActiveLink =
    'transition-all duration-150 text-white bg-green-700 rounded-lg px-4 py-1';
  const notActiveLink =
    'transition-all duration-150 rounded-lg bg-green-400 px-4 py-1 text-white';

  return (
    <nav className="h-16 bg-green-500 p-4">
      <div className="flex w-full items-center justify-center gap-12">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? isActiveLink : notActiveLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/data"
          className={({ isActive }) =>
            isActive ? isActiveLink : notActiveLink
          }
        >
          Data
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
