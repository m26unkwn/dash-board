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
      <div className='dashboard-chart'>
        <h2 className='chart-title'>Activities</h2>
      </div>
      <div className='dashboard-bottom-container'></div>
    </div>
  );
};
