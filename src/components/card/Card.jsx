import styles from "./Card.module.scss";

export default function Card({ title, image, description, colour }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: `rgba(var(${colour}), 0.15)` }}
    >
      <div
        className={styles.topColourBar}
        style={{ backgroundColor: `rgb(var(${colour}))` }}
      />
      <div className={styles.content}>
        <img className={styles.image} src={image} alt={`${title} icon`} />
        <h2 className={styles.title} style={{ color: `rgb(var(${colour}))` }}>
          {title}
        </h2>
        <p
          className={styles.description}
          style={{ color: `rgb(var(${colour}))` }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
