import { Line } from "react-chartjs-2";

const RevenueChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Line Chart with Blue Area',
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)', // Blue area color
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true, // Fill the area under the line
          },
        ],
      };
  return (
    <div>
      <h2>Revenue</h2>
      <Line data={data}  />
    </div>
  )
}

export default RevenueChart