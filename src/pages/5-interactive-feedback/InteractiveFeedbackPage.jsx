import defaultPageStyles from "../../shared-styles/DefaultPage.module.scss";

import NavigablePageContent from "../../components/navigable-page-content/NavigablePageContent.jsx";

import Navbar from "../../components/navbar/Navbar.jsx";
import NavIcon from "../../assets/icons/feedback-icon-inverted.png";
import RecolouredPage from "../../components/recoloured-page/RecolouredPage.jsx";
const pageColour = "--interactive-feedback-colour";

export default function InteractiveFeedbackPage() {
  return (
    <RecolouredPage pageColour={pageColour}>
      <Navbar icon={NavIcon} />
      <NavigablePageContent headingNavClass={defaultPageStyles.sectionHeading}>
        <div className={defaultPageStyles.content}>
          <h2 id="content-heading" className={defaultPageStyles.sectionHeading}>
            CONTENT HEADING
          </h2>
          <p>Interesting and insightful content.</p>
        </div>
      </NavigablePageContent>
    </RecolouredPage>
  );
}
