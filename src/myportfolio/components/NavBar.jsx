import { Link, NavLink } from "react-router-dom"
import "../styles/navbar.css"

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-sm header-p">

            <Link
                className="logo"
                to="/"
            >
                Omar
            </Link>

            <ul className="navbar-nav ml-auto ul-p">
                <NavLink
                    className={({ isActive }) => `nav-item nav-link navlink-p ${isActive ? 'active' : ''}`}
                    to="/about"
                >
                    About
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navlink-p ${isActive ? 'active' : ''}`}
                    to="/technology"
                >
                    Skills
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navlink-p ${isActive ? 'active' : ''}`}
                    to="/experience"
                >
                    Experience
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link  navlink-p ${isActive ? 'active' : ''}`}
                    to="/project"
                >
                    Project
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navlink-p ${isActive ? 'active' : ''}`}
                    to="/contact"
                >
                    Contact
                </NavLink>
            </ul>
        </nav>
    )
}
