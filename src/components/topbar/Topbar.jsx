import { Link, useNavigate } from "react-router-dom";
import styles from "./Topbar.module.scss";
import { IoIosMail, IoMdPerson } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

export default function Topbar() {
  const navigate = useNavigate();

  const goToContactUs = () => {
    navigate("/contact-us");
  };

  return (
    <div>
      <div className={styles.topbar}>
        <div className={styles.email} onClick={goToContactUs}>
          <IoIosMail size="20" />
          <p>anastasia.globa@sydney.edu.au</p>
          <IoIosMail size="20" />
          <p>olubukola.tokede@deakin.edu.au</p>
        </div>
        <div className={styles.login}>
          <div className={styles.loginId}>
            <div className={styles.divider}></div>
            <IoMdPerson size="20" />
            <p>LOGIN</p>
          </div>
          <Link to="/" className={styles.homeButton}>
            <IoHomeOutline size="20" />
          </Link>
        </div>
      </div>
    </div>
  );
}
