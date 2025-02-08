import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white h-screen p-4">
            <h2 className="text-xl font-bold mb-4 header-value">UI Topics</h2>
            <nav className="menu-items">
                <ul className="flex items-center space-x-4">
                    <li className="horzantlTabs"><Link to="/" className="py-2 px-4">HTML</Link></li>
                    <li  className="horzantlTabs"><Link to="/css" className="py-2 px-4">CSS</Link></li>
                    <li  className="horzantlTabs"><Link to="/javascript" className="py-2 px-4">Javascript</Link></li>
                    <li  className="horzantlTabs"><Link to="/react" className="py-2 px-4">React</Link></li>
                </ul>

            </nav>
        </div>
    );
};

export default Sidebar;
