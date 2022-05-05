import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = coinHistory?.data.history.map((h) => h.price).reverse();
  const coinTimeStamp = coinHistory?.data.history.map((h) => new Date(h.timestamp).toLocaleTimeString()).reverse();
  console.log(coinHistory?.data.history);
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  const options = {};
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
