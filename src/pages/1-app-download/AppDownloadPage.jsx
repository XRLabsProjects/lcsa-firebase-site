import defaultPageStyles from "../../shared-styles/DefaultPage.module.scss";
import styles from "./AppDownloadPage.module.scss";

import NavigablePageContent from "../../components/navigable-page-content/NavigablePageContent.jsx";
import DownloadLinkCard from "../../components/download-link-card/DownloadLinkCard.jsx";
import PageLinkCard from "../../components/page-link-card/PageLinkCard.jsx";

import AndroidIcon from "../../assets/icons/android-icon.png";
import AppleIcon from "../../assets/icons/apple-icon.png";
import WindowsIcon from "../../assets/icons/windows-icon.png";
import Navbar from "../../components/navbar/Navbar.jsx";
import NavIcon from "../../assets/icons/download-icon-inverted.png";
import RecolouredPage from "../../components/recoloured-page/RecolouredPage.jsx";

// FIXME: these reference localhost -- needs updating when website hosted
const apkDownload = "http://localhost:5173/downloads/android-download.apk";
const exeDownload = "http://localhost:5173/downloads/windows-download.zip";

const pageColour = "--app-download-colour";

export default function AppDownloadPage() {
  return (
    <RecolouredPage pageColour={pageColour}>
      <Navbar icon={NavIcon} />
      <div className={styles.cardContainer}>
        <DownloadLinkCard
          title="ANDROID APP DOWNLOAD"
          image={AndroidIcon}
          description="Free download of Android AR version of the LCSA Tracker.
          App version 2025.01"
          colour={"--app-download-colour"}
          link={apkDownload}
          downloadName="lcsa-tracker-app.apk"
        />
        <PageLinkCard
          title="APPLE APP DOWNLOAD"
          image={AppleIcon}
          description="Free download of Apple mobile AR version of the LCSA Tracker.
          App version 2025.01"
          colour={"--app-download-colour"}
          link={"https://apps.apple.com/au/app/lcsa-tracker/id6563142971"}
          isExternal={true}
        />
        <DownloadLinkCard
          title="DESKTOP APP DOWNLOAD"
          image={WindowsIcon}
          description="Free download of Windows desktop version of the LCSA Tracker.
          App version 2025.01"
          colour={"--app-download-colour"}
          link={exeDownload}
          downloadName="lcsa-tracker-exe.zip"
        />
      </div>
      <div className={styles.body}>
        <NavigablePageContent
          headingNavClass={defaultPageStyles.sectionHeading}
        >
          <div className={defaultPageStyles.content}>
            <h2
              id="content-heading"
              className={defaultPageStyles.sectionHeading}
            >
              CONTENT HEADING
            </h2>
            <p>Interesting and insightful content.</p>
          </div>
        </NavigablePageContent>
      </div>
    </RecolouredPage>
  );
}
