import "chart.js/auto";
import { Chart } from "react-chartjs-2";


const StatusChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    
    datasets: [
      {
        label: 'Line 1',
        borderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
      },
      {
        label: 'Line 2',
        borderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
      },
    ],
  };

  return (
    <div className="flex flex-col h-full bg-white border px-8 py-5 border-gray-200 rounded-md hover:bg-gray font-light" >
      <h5 className='my-2 text-base font-[500] text-statpurple'>Task</h5>
      <div className="grid place-items-center 0 flex-[1]" >

      <Chart type="line" data={data}  />
      </div>
    </div>
  )
}

export default StatusChart