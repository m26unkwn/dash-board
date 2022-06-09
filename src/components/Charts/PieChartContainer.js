import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { piePercentage } from "../../utils";
import "./piechart.css";

const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];

export const PieChartContainer = ({ data }) => {
  return (
    <>
      <ResponsiveContainer height='100%'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'>
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='chart-value'>
        <div className='value-tees'>
          <div className='value-title'>
            <span className='tees circle'></span>
            <p>Basic Tees</p>
          </div>
          <p className='pie-percnt'> {piePercentage("Basic Tees", data)} %</p>
        </div>
        <div className='value-pants'>
          <div className='value-title'>
            <span className=' circle pants'></span>
            <p>Custom Short Pants</p>
          </div>
          <p className='pie-percnt'>
            {piePercentage("Custom Short Pants", data)} %
          </p>
        </div>
        <div className='value-hoodies'>
          <div className='value-title'>
            <span className='hoodies circle'></span>
            <p>Super Hoodies</p>
          </div>
          <p className='pie-percnt'>{piePercentage("Super Hoodies", data)} %</p>
        </div>
      </div>
    </>
  );
};
