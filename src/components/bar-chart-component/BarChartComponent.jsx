"use client";

import styles from "./BarChartComponent.module.scss";

import { FaSquareFull } from "react-icons/fa";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React from "react";

const minChartWidth = 400;
const minChartHeight = 300;
const barSize = 30;

const BarChartComponent = ({ dataType, data, graphColour }) => {
  const maxOpacity = 0.95;
  const minOpacity = 0.35;
  let opacityDiff = maxOpacity;
  if (data.length > 0) opacityDiff = (maxOpacity - minOpacity) / data.length;

  const dataCategories = {};

  data.forEach((item) => {
    if (item in dataCategories) {
      dataCategories[item]++;
    } else {
      dataCategories[item] = 1;
    }
  });

  const chartData = [];
  for (const [key, value] of Object.entries(dataCategories)) {
    chartData.push({ category: key, count: value });
  }

  return (
    <div className={styles.container}>
      <h1>{dataType.toUpperCase()}</h1>
      {/*<ResponsiveContainer*/}
      {/*  width={minChartSize + barSize * data.length}*/}
      {/*  height="80%"*/}
      {/*>*/}
      <BarChart
        className={styles.chart}
        data={chartData}
        width={minChartWidth + barSize * data.length}
        height={minChartHeight}
        layout="horizontal"
      >
        <XAxis
          type="category"
          dataKey="category"
          className={styles.yAxis}
          tickFormatter={(value) => value.replace(/ /g, "\u00A0")} // prevents recharts from automatically creating a new line where a space exists
        />
        <YAxis type="number" allowDecimals={false} />
        <Tooltip />

        <Bar dataKey="count" barSize={barSize}>
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`rgb(var(${graphColour}))`}
              // fill={`rgba(var(${graphColour}), ${maxOpacity - opacityDiff * index})`}
            />
          ))}
        </Bar>
      </BarChart>
      {/*</ResponsiveContainer>*/}
    </div>
  );
};

export default BarChartComponent;
