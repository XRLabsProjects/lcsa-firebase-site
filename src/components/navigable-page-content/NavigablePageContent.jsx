import { useState, useEffect, useRef } from "react";

import defaultPageStyles from "../../shared-styles/DefaultPage.module.scss";
import styles from "./NavigablePageContent.module.scss";

import Sidebar from "../../components/sidebar/Sidebar.jsx";

export default function NavigablePageContent({ children, headingNavClass }) {
  const [sectionHeadings, setSectionHeadings] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll(
        `.${headingNavClass}`,
      );
      const headings = Array.from(sections).map((element) => element);
      setSectionHeadings(headings);
    }
  }, []);

  return (
    <div className={`${defaultPageStyles.page} ${styles.pageContainer}`}>
      <div className={styles.pageContent} ref={containerRef}>
        <div className={styles.sidebarContainer}>
          <Sidebar
            parentStyle={defaultPageStyles.sidebar}
            navElements={sectionHeadings}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
