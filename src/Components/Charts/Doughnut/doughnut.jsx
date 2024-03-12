import { Doughnut } from "react-chartjs-2";
const DoughnutChart = ({ chartData }) => {
  console.log("bar chart data", chartData);
  return <Doughnut data={chartData} />;
};
export default DoughnutChart;
