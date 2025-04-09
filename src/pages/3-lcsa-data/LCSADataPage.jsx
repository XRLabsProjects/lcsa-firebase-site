import defaultPageStyles from "../../shared-styles/DefaultPage.module.scss";
import styles from "./LCSADataPage.module.scss";

import CustomWordCloud from "../../components/custom-word-cloud/CustomWordCloud.jsx";
import BarChartComponent from "../../components/bar-chart-component/BarChartComponent.jsx";
import PageLinkCard from "../../components/page-link-card/PageLinkCard.jsx";
import RecolouredPage from "../../components/recoloured-page/RecolouredPage.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

import axios from "axios";
import { useEffect, useState } from "react";

import NavIcon from "../../assets/icons/data-icon-inverted.png";
import QuestionnaireIcon from "../../assets/icons/questionnaire-no-copyright.png";
import { CreateUrl } from "../../data/serverInfo.js";

const pageColour = "--lcsa-data-colour";

const wordSize = 0.3;

export default function LCSADataPage() {
  const [limitationsAndBarriersData, setLimitationsAndBarriersData] = useState(
    [],
  );
  const [opportunitiesAndPotentialData, setOpportunitiesAndPotentialData] =
    useState([]);

  const createGraphArray = (data, sizeScaling = 1) => {
    let newDataArr = [];

    data.forEach((element) => {
      newDataArr.push({
        text: element,
        value: wordSize * sizeScaling,
      });
    });

    return newDataArr;
  };

  useEffect(() => {
    const fetchData = async () => {
      const query = { limitationsAndBarriers: 1, opportunitiesAndPotential: 1 };
      const fetchData = async (q) => {
        try {
          const response = await axios.post(
            `${CreateUrl()}/api/getFilteredLcsaQuestionnaireFields`,
            q,
          );

          setLimitationsAndBarriersData(
            createGraphArray(
              response.data.map((element) => element.limitationsAndBarriers),
            ),
          );

          setOpportunitiesAndPotentialData(
            createGraphArray(
              response.data.map((element) => element.opportunitiesAndPotential),
            ),
          );
        } catch (err) {
          console.error("Error fetching chart data:", err);
        }
      };

      await fetchData(query);
    };

    fetchData();
  }, []);

  return (
    <RecolouredPage pageColour={pageColour}>
      <Navbar icon={NavIcon} />
      <div className={styles.questionnaireCard}>
        <PageLinkCard
          title="QUESTIONNAIRE"
          image={QuestionnaireIcon}
          description="Click here for an online questionnaire about your experience with the LCSA Tracker App."
          link="/questionnaire"
          colour={"--lcsa-data-colour"}
        />
      </div>
      <h2>Limitations and Barriers in the LCSA Tracker app</h2>
      <CustomWordCloud data={limitationsAndBarriersData} />

      <h2>Opportunities and Potential in the LCSA Tracker app</h2>
      <CustomWordCloud data={opportunitiesAndPotentialData} />
    </RecolouredPage>
  );
}
