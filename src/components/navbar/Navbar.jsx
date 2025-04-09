import styles from "./Navbar.module.scss";

import HamburgerMenu from "../hamburger-menu/HamburgerMenu.jsx";

import {
  Link,
  useMatch,
  useResolvedPath,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";

import Logo from "../../assets/icons/LOGO.svg";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

import { PageRoutes } from "../../data/pageRoutes.js";

export default function Navbar({ icon }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname); // may not be necessary

  useEffect(() => {
    setActivePage(location.pathname);

    setHamburgerOpen(false);
  }, [location]);

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.siteTitle}>
          <img src={Logo} alt="Site Logo" className={styles.siteImage}></img>
          <div>
            <h2>LCSA TRACKER</h2>
            <p>Life Cycle Sustainability Assessment</p>
          </div>
        </Link>

        {icon ? NavIcon(icon) : NavLinks()}

        <div className={styles.hamburgerIcon}>
          <IoMenu
            style={{ display: !hamburgerOpen ? "block" : "none" }}
            size="60"
            onClick={toggleHamburgerMenu}
          />
          <IoClose
            style={{ display: hamburgerOpen ? "block" : "none" }}
            size="60"
            onClick={toggleHamburgerMenu}
          />
        </div>
      </nav>
      <div
        className={
          hamburgerOpen ? styles.hamburgerOpen : styles.hamburgerClosed
        }
      >
        <HamburgerMenu />
      </div>
    </div>
  );
}

function NavIcon(icon) {
  return <img src={icon} className={styles.navIcon} alt="Page Icon" />;
}

function NavLinks() {
  const navigate = useNavigate();

  var searchOptions = PageRoutes.map((route) => {
    return route.name.toLowerCase();
  });

  const selectRoute = (name) => {
    PageRoutes.forEach((route) => {
      if (route.name.toLowerCase() === name.toLowerCase()) {
        navigate(route.path);
      }
    });
  };

  return (
    <ul className={styles.navPages}>
      <CustomLink to="/about">ABOUT</CustomLink>
      <CustomLink to="/our-team">OUR TEAM</CustomLink>
      <div className={styles.searchBar}>
        <TextInput
          Component="input"
          placeholder="SEARCH PAGE"
          options={searchOptions}
          trigger=""
          onSelect={selectRoute}
          spacer=""
          matchAny={true}
        />
        <div className={styles.searchIconContainer}>
          <IoSearch size="20" className={styles.searchIcon} />
        </div>
      </div>
    </ul>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
