"use client";

import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
const DataChart = ({
  encyclopedia,
  adoption,
}: {
  encyclopedia: any;
  adoption: any;
}) => {
  const Data = [
    { title: "Total Adoptions", value: encyclopedia.length, color: "#0088FE" },
    { title: "Total Encyclopedias", value: adoption.length, color: "#00C49F" },
    { title: "Total", value: encyclopedia.length + adoption.length, color: "#FFBB28" },
  ];

  const chartData = Data.map((item) => ({
    name: item.title,
    value: item.value,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
        {/* 1 */}
        <div className="flex flex-col space-y-3 order-2 md:order-1">
          {Data.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center bg-white  rounded-lg border shadow-md p-6`}
            >
              <h2
                style={{ color: item.color }}
                className={`text-lg font-semibold `}
              >
                {item.title}
              </h2>
              <div
                style={{ color: item.color }}
                className={`mt-2 text-4xl font-bold`}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* 2: Pie Chart */}
        <div className="flex items-center justify-center bg-white rounded-lg border shadow-md p-6 order-1 md:order-2">
          {isClient && (
            <PieChart width={300} height={300}>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
              // label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          )}
        </div>
      </div>
    </>
  );
};
export default DataChart;