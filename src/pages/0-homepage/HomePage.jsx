import styles from "./Homepage.module.scss";

import HomeBanner from "../../assets/banners/LCSA Website_00_home.png";
import PageLinkCard from "../../components/page-link-card/PageLinkCard.jsx";

import Navbar from "../../components/navbar/Navbar.jsx";
import RecolouredPage from "../../components/recoloured-page/RecolouredPage.jsx";

import AppDownloadIcon from "../../assets/icons/download-icon.png";
import WebAppIcon from "../../assets/icons/web-app-icon.png";
import LCSADataIcon from "../../assets/icons/data-icon.png";
import TutorialsIcon from "../../assets/icons/tutorials-icon.png";
import InteractiveFeedbackIcon from "../../assets/icons/feedback-icon.png";
import PublicationsIcon from "../../assets/icons/publications-icon.png";

const pageColour = "--default-page-colour";

export default function HomePage() {
  return (
    <RecolouredPage pageColour={pageColour}>
      <div className={styles.page}>
        <Navbar />
        <img
          className={styles.banner}
          src={HomeBanner}
          alt="Home Banner Image"
        />
        <div className={styles.cardGridPositioner}>
          <div className={styles.cardContainer}>
            <PageLinkCard
              title="APP DOWNLOAD"
              image={AppDownloadIcon}
              description="Free download of Android AR, Apple AR or Desktop version of the LCSA Tracker. App version 2025.01"
              link="/app-download"
              colour={"--app-download-colour"}
            />
            <PageLinkCard
              title="WEB LCSA TRACKER"
              image={WebAppIcon}
              description="Try our online version of the LCSA Tracker application. WEBGL that can only be used within a compatible browser."
              link="/web-app"
              colour={"--web-app-colour"}
            />
            <PageLinkCard
              title="LCSA DATA"
              image={LCSADataIcon}
              description="Sample food, waste and building data. CSV format. Links to external resources and databases."
              link="/lcsa-data"
              colour={"--lcsa-data-colour"}
            />
            <PageLinkCard
              title="TUTORIALS"
              image={TutorialsIcon}
              description="Data calculation pipeline. Examples of use. Tutorials on how to use AR and Desktop versions of the LCSA Tracker."
              link="/tutorials"
              colour={"--tutorials-colour"}
            />
            <PageLinkCard
              title="INTERACTIVE FEEDBACK"
              image={InteractiveFeedbackIcon}
              description="User Engagement portal where academics and professionals can explore and share their practices of LCSA applcation."
              link="/interactive-feedback"
              colour={"--interactive-feedback-colour"}
            />
            <PageLinkCard
              title="PUBLICATIONS"
              image={PublicationsIcon}
              description="List of our latest publications related to this project."
              link="/publications"
              colour={"--publications-colour"}
            />
          </div>
        </div>
      </div>
    </RecolouredPage>
  );
}
