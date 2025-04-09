import defaultPageStyles from "../../shared-styles/DefaultPage.module.scss";

import NavigablePageContent from "../../components/navigable-page-content/NavigablePageContent.jsx";
import RecolouredPage from "../../components/recoloured-page/RecolouredPage.jsx";

import ReactPlayer from "react-player";

import Navbar from "../../components/navbar/Navbar.jsx";
import NavIcon from "../../assets/icons/tutorials-icon-inverted.png";
const pageColour = "--tutorials-colour";

export default function TutorialsPage() {
  return (
    <RecolouredPage pageColour={pageColour}>
      <Navbar icon={NavIcon} />
      <NavigablePageContent headingNavClass={defaultPageStyles.sectionHeading}>
        <div className={defaultPageStyles.content}>
          <h2 id="example-video" className={defaultPageStyles.sectionHeading}>
            EXAMPLE VIDEO
          </h2>
          <ReactPlayer
            url="https://youtu.be/71FqNoYFOpM"
            controls
            light={true}
            width="100%"
          />
        </div>
      </NavigablePageContent>
    </RecolouredPage>
  );
}
