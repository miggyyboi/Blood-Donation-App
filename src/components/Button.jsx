import { NavLink } from 'react-router-dom';

function Button({ children, handler, disabled, to }) {
  if (to) {
    return (
      <NavLink to={to}>
        <button className="rounded-lg bg-green-500 px-4 py-1 text-sm text-white transition-transform duration-100 hover:scale-105 ">
          {children}
        </button>
      </NavLink>
    );
  }

  return (
    <button
      onClick={handler}
      disabled={disabled}
      className="rounded-lg bg-green-500 px-4 py-1 text-sm text-white transition-transform duration-100 hover:scale-105"
    >
      {children}
    </button>
  );
}

export default Button;
