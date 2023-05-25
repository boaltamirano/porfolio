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
                        to="/about"
                        onClick={toggleNav}
                    >
                        About me
                    </NavLink>
                    <NavLink
                        className="nav-link navlink-p"
                        to="/technology"
                        onClick={toggleNav}
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        className="nav-link navlink-p"
                        to="/experience"
                        onClick={toggleNav}
                    >
                        Experience
                    </NavLink>
                    <NavLink
                        className="nav-link navlink-p"
                        to="/project"
                        onClick={toggleNav}
                    >
                        Project
                    </NavLink>
                </ul>
            </div>

            {/* <NavLink
                className="nav-link navlink-p"
                // to="/about"
                // onClick={toggleNav}
            >
                Es
            </NavLink> */}

        </nav>
    )
}
