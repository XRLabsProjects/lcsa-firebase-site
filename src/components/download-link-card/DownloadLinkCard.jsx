import styles from "./DownloadLinkCard.module.scss";

import Card from "../card/Card.jsx";

export default function DownloadLinkCard({
  title,
  image,
  description,
  colour,
  link,
  downloadName,
}) {
  return (
    <a
      className={styles.link}
      href={link}
      target="_blank"
      download={downloadName ? downloadName : "LCSA-Tracker-APP"}
    >
      <Card
        title={title}
        image={image}
        description={description}
        colour={colour}
      />
    </a>
  );
}
