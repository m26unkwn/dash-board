import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data";
import { useAuth } from "../../store/provider/auth-provider";
import { SidebarNav } from "../../components";

export const Sidebar = () => {
  const { logoutUser } = useAuth();
  return (
    <div className='sidebar-container'>
      <SidebarNav />
    </div>
  );
};
