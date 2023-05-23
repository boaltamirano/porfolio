import { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom"
import "../styles/navbar.css"
export const NavBar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <nav className={`navbar navbar-expand-sm navbar-light fixed-top ${isScrolled ? 'scrolled' : ''}`}>
            <button
                className="navbar-toggler botonNav"
                type="button"
                onClick={toggleNav}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
            >
                <ul className="navbar-nav ul-p">
                    <NavLink
                        className="nav-link navlink-p"
                        // activeClassName="active"
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        className="nav-link navlink-p"
                        // activeClassName="active"
                        to="/technology"
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        className="nav-link navlink-p"
                        // activeClassName="active"
                        to="/experience"
                    >
                        Experience
                    </NavLink>
                    <NavLink
                        className="nav-link navlink-p"
                        // activeClassName="active"
                        to="/project"
                    >
                        Project
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
