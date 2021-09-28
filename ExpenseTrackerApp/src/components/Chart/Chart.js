import React from "react";
import ChartBars from "./ChartBars";
import "./Chart.css";

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues); //pull out all the array elements

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
