import React, { useCallback, useState } from "react";
import "./dashboard.css";
import { InfoCard, PieChartContainer, TwoLineChart } from "../../components";
import { dashData, pieData, lineData } from "../../data";
import { BackwardIcon, ForwardIcon } from "../../assets";

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
          <div className='dashboard-bottom-header'>
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
          <div className='dashboard-bottom-header'>
            <h2 className='chart-title'>Today’s schedule</h2>
            <button className='schedule-btn'>
              <span>Sea All</span> <img src={BackwardIcon} alt='seall' />
            </button>
          </div>

          <div className='schedule-container'>
            <div className='schedule-child first'>
              <h2 className='schedule-title'>
                Meeting with suppliers from Kuta Bali
              </h2>
              <p className='schedule-timev'>14.00-15.00</p>
              <p className='schedule-place'>at Sunset Road, Kuta, Bali </p>
            </div>
            <div className='schedule-child second'>
              <h2 className='schedule-title'>
                Meeting with suppliers from Kuta Bali
              </h2>
              <p className='schedule-timev'>14.00-15.00</p>
              <p className='schedule-place'>at Sunset Road, Kuta, Bali </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
