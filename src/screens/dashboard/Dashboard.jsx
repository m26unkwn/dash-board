import React, { useCallback, useState } from "react";
import "./dashboard.css";
import { InfoCard, TwoLineChart } from "../../components";
import { dashData, lineChart } from "../../data";

export const Dashboard = () => {
  const [chartData, setChartData] = useState(lineChart[0].data);

  const changeChartData = useCallback((e) => {
    const filterChartData = lineChart.find(
      (data) => data.date === e.target.value,
    );
    setChartData(filterChartData.data);
  }, []);

  return (
    <div className='dashboard-container'>
      <div className='dashboard-data'>
        {dashData.map((data) => (
          <InfoCard key={data.title} cardData={data} />
        ))}
      </div>
      <div className='dashboard-chart-container'>
        <h2 className='chart-title'>Activities</h2>
        <div className='chart-action'>
          <div className='data-selector'>
            <select onChange={changeChartData} className='data-select'>
              {lineChart.map(({ date }) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
          <div className='chart-values'>
            <div className='value-data'>
              <div className='guest-circle'></div>
              <p>Guest</p>
            </div>
            <div className='value-data'>
              <div className='user-circle'></div>
              <p>User</p>
            </div>
          </div>
        </div>
        <div className='chart'>
          <TwoLineChart data={chartData} />
        </div>
      </div>
      <div className='dashboard-bottom-container'></div>
    </div>
  );
};
