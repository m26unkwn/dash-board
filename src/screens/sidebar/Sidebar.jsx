import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data/nav-items";

export const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-content-wrapper'>
        <div className='sidebar-head'>
          <NavLink to='/'>
            <h1>Dash.</h1>
          </NavLink>
        </div>
        <div className='sidebar-nav-items'>
          <div className='nav-items'>
            {navItems.map(({ icon, title, to }) => (
              <NavLink
                to={to}
                className={({ active }) => (active ? "nav-item-active" : "")}>
                <img src={icon} alt='home_icon' />
                <span className='nav-title'>{title}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className='nav-items-end'>
          <p>Help</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};