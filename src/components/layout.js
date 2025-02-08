import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"
import Header from "./Header";
import './index.css';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          <Outlet /> {/* This will change based on route */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
