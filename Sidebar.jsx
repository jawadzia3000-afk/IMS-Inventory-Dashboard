import { NavLink, useNavigate } from "react-router-dom";

import {
    FiGrid,
    FiBox,
    FiPlusSquare,
    FiUsers,
    FiBarChart2,
    FiSettings,
    FiLogOut,
    FiRefreshCcw,
    FiShield,
    FiUser
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

function Sidebar() {

    const { user, logout, switchRole } = useAuth();
    const navigate = useNavigate();
    const role = user?.role || "employee";

    const adminLinks = [
        { name: "Dashboard", icon: <FiGrid />, path: "/" },
        { name: "Inventory", icon: <FiBox />, path: "/inventory" },
        { name: "Add Inventory", icon: <FiPlusSquare />, path: "/add-inventory" },
        { name: "Employees", icon: <FiUsers />, path: "/employees" },
        { name: "Reports", icon: <FiBarChart2 />, path: "/reports" },
        { name: "Settings", icon: <FiSettings />, path: "/settings" },
    ];

    const employeeLinks = [
        { name: "Dashboard", icon: <FiGrid />, path: "/" },
        { name: "Inventory", icon: <FiBox />, path: "/inventory" },
        { name: "Add Inventory", icon: <FiPlusSquare />, path: "/add-inventory" },
        { name: "Update Status", icon: <FiRefreshCcw />, path: "/status" },
        { name: "Settings", icon: <FiSettings />, path: "/settings" },
    ];

    const links = role === "admin" ? adminLinks : employeeLinks;

    function handleLogout() {
        logout();
        navigate("/login", { replace: true });
    }

    return (
        <aside className="w-72 bg-slate-900 text-white flex flex-col shrink-0">

            <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-slate-700">
                IMS Dashboard
            </div>

            <nav className="flex-1 mt-5">
                {links.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        end={item.path === "/"}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-6 py-4 transition
                            ${isActive ? "bg-blue-600" : "hover:bg-slate-800"}
                            `
                        }
                    >
                        {item.icon}
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            <div className="px-6 py-4 border-t border-slate-700">
                <p className="text-xs uppercase text-slate-400 mb-3 tracking-wide">
                    View as
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={() => switchRole("admin")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm transition ${
                            role === "admin" ? "bg-blue-600" : "bg-slate-800 hover:bg-slate-700"
                        }`}
                    >
                        <FiShield size={14} /> Admin
                    </button>
                    <button
                        onClick={() => switchRole("employee")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm transition ${
                            role === "employee" ? "bg-blue-600" : "bg-slate-800 hover:bg-slate-700"
                        }`}
                    >
                        <FiUser size={14} /> Employee
                    </button>
                </div>
            </div>

            <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-6 py-5 hover:bg-red-600 transition"
            >
                <FiLogOut />
                Logout
            </button>

        </aside>
    );
}

export default Sidebar;
