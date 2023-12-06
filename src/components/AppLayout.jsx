import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center bg-[#faf9ff]">
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
