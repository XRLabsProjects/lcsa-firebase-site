import { Link } from "react-router-dom";
import styles from "./PageLinkCard.module.scss";

import Card from "../card/Card.jsx";

export default function PageLinkCard({
  title,
  image,
  description,
  link,
  colour,
  isExternal,
}) {
  return (
    <Link
      className={styles.link}
      to={link}
      target={isExternal ? "_blank" : "_self"}
      rel=""
    >
      <Card
        title={title}
        image={image}
        description={description}
        colour={colour}
      />
    </Link>
  );
}
