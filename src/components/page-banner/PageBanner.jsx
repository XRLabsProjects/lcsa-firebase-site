import styles from "./PageBanner.module.scss";

export default function Banner({ image, icon, title }) {
  return (
    <>
      <div className={styles.banner}>
        <img
          src={image}
          className={styles.bannerArt}
          alt={`${title} page banner`}
        />
        <div className={styles.information}>
          <div className={styles.iconContainer}>
            <img
              src={icon}
              className={styles.icon}
              alt={`${title} page icon`}
            ></img>
          </div>
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
}
