import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "../../pages/0-homepage/HomePage.jsx";
import PageNotFoundPage from "../../pages/page-not-found/PageNotFoundPage.jsx";
import AboutPage from "../../pages/about/AboutPage.jsx";
import OurTeamPage from "../../pages/our-team/OurTeamPage.jsx";
import ContactUsPage from "../../pages/contact-us/ContactUsPage.jsx";
import QuestionnairePage from "../../pages/questionnaire/QuestionnairePage.jsx";

import AppDownloadPage from "../../pages/1-app-download/AppDownloadPage.jsx";
import WebAppPage from "../../pages/2-web-app/WebAppPage.jsx";
import LCSADataPage from "../../pages/3-lcsa-data/LCSADataPage.jsx";
import TutorialsPage from "../../pages/4-tutorials/TutorialsPage.jsx";
import InteractiveFeedbackPage from "../../pages/5-interactive-feedback/InteractiveFeedbackPage.jsx";
import PublicationsPage from "../../pages/6-publications/PublicationsPage.jsx";
import AnalyticsPage from "../../pages/analytics/AnalyticsPage.jsx";

export const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/our-team" element={<OurTeamPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/app-download" element={<AppDownloadPage />} />
      <Route path="/web-app" element={<WebAppPage />} />
      <Route path="/lcsa-data" element={<LCSADataPage />} />
      <Route path="/questionnaire" element={<QuestionnairePage />} />
      <Route path="/tutorials" element={<TutorialsPage />} />
      <Route
        path="/interactive-feedback"
        element={<InteractiveFeedbackPage />}
      />
      <Route path="/publications" element={<PublicationsPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />

      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
};
