import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        {/* <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink> */}
        <NavLink
          to="/profile"
          style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
        >
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink
          to="/dialogs"
          style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}
        >
          Settings
        </NavLink>
      </div>

      <div className={s.friend}>
         <h3>Friends</h3>
         <div className={s.friendPhoto}>
          <img className={s.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png" />
          <p>Sanya</p>
          </div>
         <div className={s.friendPhoto}><img className={s.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png" /></div>
         <div className={s.friendPhoto}><img className={s.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png" /></div>
      </div>
    </nav>
  );
};

export default Navbar;
