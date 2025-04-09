import styles from "./App.module.scss";

import { AuthenticationWrapper } from "./components/authentication-wrapper/AuthenticationWrapper.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import Footer from "./components/footer/Footer.jsx";

import Favicon from "react-favicon";
import logoFavicon from "./favicon.ico";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Favicon url={logoFavicon} />
      <Topbar />
      <div className={styles.pageContainer}>
        <AuthenticationWrapper />
      </div>
      <Footer />
    </div>
  );
}
