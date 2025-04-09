import styles from "./HamburgerMenu.module.scss";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function HamburgerMenu() {
  return (
    <>
      <div className={styles.hamburgerMenu}>
        <CustomLink to="/about">
          <p>ABOUT</p>
        </CustomLink>
        <CustomLink to="/our-team">
          <p>OUR TEAM</p>
        </CustomLink>
        <CustomLink to="/contact-us">
          <p>CONTACT US</p>
        </CustomLink>
        <CustomLink to="/login">
          <p>LOGIN</p>
        </CustomLink>
      </div>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <Link to={to} {...props}>
        <div className={styles.item}>
          <div className={styles.backgroundColour}>{children}</div>
        </div>
      </Link>
    </li>
  );
}
