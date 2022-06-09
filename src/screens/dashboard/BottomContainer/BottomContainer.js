import React from "react";

import { BackwardIcon } from "../../../assets";

export const BottomContainer = () => {
  return (
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
  );
};
