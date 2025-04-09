// import styles from "./WordCloud.module.scss";

import React from "react";
import WordCloud from "react-d3-cloud";
import { DemoData } from "../../data/demoData.js";

// TODO: fix placeholder hardcoded values - use css where possible

const width = 400;
const height = 150;
const fontScale = 30;

export default function CustomWordCloud({ data }) {
  return (
    <WordCloud
      data={data}
      width={width}
      height={height}
      fontWeight="bold"
      fontSize={fontSize}
    />
  );
}

const fontSize = (word) => {
  return word.value * fontScale;
};
