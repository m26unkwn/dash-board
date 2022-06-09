import React, { useCallback, useState } from "react";
import "./dashboard.css";
import { InfoCard, PieChartContainer, TwoLineChart } from "../../components";
import { dashData, pieData, lineData } from "../../data";

export const Dashboard = () => {
  const [lineChart, setLineChart] = useState(lineData[0].data);
  const [pieChart, setPieChart] = useState(pieData[0].data);

  const changeChartData = useCallback((e, setData, chartData) => {
    const filterChartData = chartData.find(
      (data) => data.date === e.target.value,
    );
    setData(filterChartData.data);
  }, []);

  return (
    <div className='dashboard-container'>
      <div className='dashboard-data'>
        {dashData.map((data) => (
          <InfoCard key={data.title} cardData={data} />
        ))}
      </div>
      <div className='account dashboard-chart-container'>
        <h2 className='chart-title'>Activities</h2>
        <div className='chart-action'>
          <div className='data-selector'>
            <select
              onChange={(e) => changeChartData(e, setLineChart, lineData)}
              className='data-select'>
              {lineData.map(({ date }) => (
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
          <TwoLineChart data={lineChart} />
        </div>
      </div>
      <div className='dashboard-bottom-container'>
        <div className='account dashboard-bottom-child'>
          <div className='piechart-header'>
            <h2 className='chart-title'>Top Products</h2>
            <div className='data-selector'>
              <select
                onChange={(e) => changeChartData(e, setPieChart, pieData)}
                className='data-select'>
                {pieData.map(({ date }) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='pichart-container'>
            <PieChartContainer data={pieChart} />
          </div>
        </div>
        <div className='account dashboard-bottom-child'>
          <h2 className='chart-title'>Today’s schedule</h2>
        </div>
      </div>
    </div>
  );
};
