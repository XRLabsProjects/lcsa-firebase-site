import defaultPageStyles from "../../shared-styles/DefaultPage.module.scss";
import styles from "./AnalyticsPage.module.scss";

import BarChartComponent from "../../components/bar-chart-component/BarChartComponent.jsx";

import axios from "axios";
import { useEffect, useState } from "react";

import { CreateUrl } from "../../data/serverInfo.js";

const pageColour = "--lcsa-data-colour";
export default function AnalyticsPage() {
  const [graphElements, setGraphElements] = useState([]);

  const updateAllGraphs = (data) => {
    // requires the keys to be consistent between each object
    const keys = Object.keys(data[0]);
    let newGraphElements = [];

    for (const key of keys) {
      const currentGraphData = data.map((element) => element[key]);
      newGraphElements.push(
        <BarChartComponent
          key={key}
          dataType={key}
          data={currentGraphData}
          graphColour={pageColour}
        />,
      );
    }
    setGraphElements(newGraphElements);
  };

  useEffect(() => {
    const fetchData = async () => {
      const query = {
        ageGroup: 1,
        experience: 1,
        gender: 1,
        easyToUse: 1,
        quickToLearn: 1,
        engaging: 1,
        enjoyment: 1,
      };
      const fetchData = async (q) => {
        try {
          const response = await axios.post(
            `${CreateUrl()}/api/getFilteredLcsaQuestionnaireFields`,
            q,
          );

          updateAllGraphs(response.data);
        } catch (err) {
          console.error("Error fetching chart data:", err);
        }
      };

      await fetchData(query);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Bar Chart Example</h1>
      <div className={styles.graphs}>{graphElements}</div>
    </>
  );
}
