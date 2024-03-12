import "./barChart.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const BarChart = ({ chartData }) => {
  console.log("bar chart data", chartData);
  return <Bar data={chartData} />;
};
export default BarChart;
