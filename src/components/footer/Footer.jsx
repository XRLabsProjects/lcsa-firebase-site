import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © The University of Sydney {new Date().getFullYear()}
    </footer>
  );
}
