import React, { useEffect } from "react";

import { Chart, Label, Legend, Series } from "devextreme-react/chart"; 

const ChartComponent = ({dataSource ,chareType = 'bar'}) => {
  useEffect(() => {
    let svgChartList = document.querySelectorAll("#chart svg");
    let svgChartLParentList = []
    svgChartList.forEach(el=>  svgChartLParentList.push(el.closest(".flex")))
    svgChartList.forEach((el,i)=>el.style.width = svgChartLParentList[i].offsetWidth - 30) 
    window.addEventListener("resize", () => {
      svgChartList.forEach((el,i)=>el.style.width = svgChartLParentList[i].offsetWidth - 30)
    });
  }, []);
  return (
    <Chart id="chart" dataSource={dataSource}>
      <Series
        valueField="oranges"
        argumentField="day"
        type={chareType}
        color="#fff"
      ></Series>
      <Legend visible={false} />
    </Chart>
  );
};

export default ChartComponent;
