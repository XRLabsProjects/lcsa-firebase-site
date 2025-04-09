import defaultPageStyles from "../../shared-styles/DefaultPage.module.scss";

import NavigablePageContent from "../../components/navigable-page-content/NavigablePageContent.jsx";
import RecolouredPage from "../../components/recoloured-page/RecolouredPage.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

const pageColour = "--default-page-colour";

export default function AboutPage() {
  return (
    <RecolouredPage pageColour={pageColour}>
      <Navbar />
      <h2>ABOUT</h2>
      <NavigablePageContent
        headingNavClass={defaultPageStyles.sectionHeading}
        navColour={pageColour}
      >
        <div className={defaultPageStyles.content}>
          <h2 id="content" className={defaultPageStyles.sectionHeading}>
            CONTENT HEADING
          </h2>
          <p>Super interesting and cool content</p>
        </div>
      </NavigablePageContent>
    </RecolouredPage>
  );
}
