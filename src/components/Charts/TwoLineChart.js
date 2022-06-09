import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const TwoLineChart = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        * <CartesianGrid horizontal={true} vertical={false} />
        <XAxis dataKey='week' color='var(--FIELD-COLOR)' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='user'
          stroke='var(--LIGHT-GREEN-COLOR)'
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
        <Line
          type='monotone'
          dataKey='guest'
          stroke='var(--LIGHT-RED-COLOR)'
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
