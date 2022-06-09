import React from "react";
import "./dashboard.css";
import { InfoCard } from "../../components";
import { RevenueIcon } from "../../assets";
import { dashData } from "../../data";

export const Dashboard = () => {
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
            <select className='data-select'>
              <option value='may-june 2021'>May - June 2021</option>
              <option value='june-july 2021'>June - July 2021</option>
              <option value='july-august 2021'>June - July 2021</option>
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
          <div className="chart"></div>
        </div>
      </div>
      <div className='dashboard-bottom-container'></div>
    </div>
  );
};
