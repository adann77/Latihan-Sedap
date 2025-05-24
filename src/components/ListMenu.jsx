import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function ListMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${isActive ?
            "text-hijau bg-green-200 font-extrabold" :
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;

    return (
        <div id="sidebar-menu" className="mt-10">
            <ul id="menu-list" className="space-y-3">
                <li>
                    <NavLink id="menu-1" to="/" className={menuClass}>
                        <MdDashboard className="mr-4 text-xl" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink id="menu-2" to="/orders" className={menuClass}>
                        <span>Orders</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink id="menu-3" to="/users" className={menuClass}>
                        <span>Users</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink id="menu-4" to="/customers" className={menuClass}>
                        <span>Customers</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink id="menu-5" to="/Error-400" className={menuClass}>
                        <span>Error-400</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink id="menu-6" to="/Error-401" className={menuClass}>
                        <span>Error-401</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink id="menu-7" to="/Error-403" className={menuClass}>
                        <span>Error-403</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
