import styles from "./Sidebar.module.scss";
import { HashLink } from "react-router-hash-link";

export default function Sidebar({ parentStyle, navElements }) {
  return (
    <div className={`${styles.sidebar} ${parentStyle}`}>
      <div className={styles.topColourBar}></div>
      <div className={styles.content}>
        <p>
          <i>Page navigation</i>
        </p>
        <ul className={styles.navIds}>
          {navElements.map((element, index) => (
            <li key={index}>
              <HashLink to={`#${element.id}`}>{element.textContent}</HashLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
