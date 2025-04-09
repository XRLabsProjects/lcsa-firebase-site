import defaultPageStyles from "../../shared-styles/DefaultPage.module.scss";
import styles from "./PublicationsPage.module.scss";

import NavigablePageContent from "../../components/navigable-page-content/NavigablePageContent.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

import NavIcon from "../../assets/icons/publications-icon-inverted.png";
import RecolouredPage from "../../components/recoloured-page/RecolouredPage.jsx";
const pageColour = "--publications-colour";

export default function PublicationsPage() {
  return (
    <RecolouredPage pageColour={pageColour}>
      <Navbar icon={NavIcon} />
      <NavigablePageContent headingNavClass={defaultPageStyles.sectionHeading}>
        <div className={defaultPageStyles.content}>
          <h2 id="book-chapters" className={defaultPageStyles.sectionHeading}>
            BOOK CHAPTERS
          </h2>
          <Publication
            title="Application of the ten LCSA principles of the Life Cycle Initiative: the perspective of the building sector"
            authors="O Tokede, A Globa"
            description="Handbook on Life Cycle Sustainability Assessment, 290-303"
            date="2024"
          />
          <Publication
            title="Life cycle sustainability tracker: a dynamic approach"
            authors="O Tokede, A Globa"
            description="Engineering, Construction and Architectural Management"
            date="2024"
          />
          <h2 id="journal-papers" className={defaultPageStyles.sectionHeading}>
            JOURNAL PAPERS
          </h2>
        </div>
      </NavigablePageContent>
    </RecolouredPage>
  );
}

function Publication({ title, authors, description, date }) {
  return (
    <div className={styles.publication}>
      <p className={styles.title}>{title}</p>
      <p className={styles.authors}>{authors}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
}
