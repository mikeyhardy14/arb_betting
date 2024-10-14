// app/components/OverUnderChart.tsx
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

const fetchOverUnderData = async () => {
  // Replace with actual API call for over/under data
  return {
    times: ['10:00', '10:05', '10:10'], // Example time labels
    over: [1.8, 1.9, 2.0], // Example over values
    under: [1.6, 1.7, 1.5], // Example under values
  };
};

const OverUnderChart = () => {
  const [data, setData] = useState<any>({ times: [], over: [], under: [] });

  useEffect(() => {
    const fetchData = async () => {
      const chartData = await fetchOverUnderData();
      setData(chartData);
    };

    fetchData();
  }, []);

  const chartData = {
    labels: data.times,
    datasets: [
      {
        label: 'Over',
        data: data.over,
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Under',
        data: data.under,
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Over/Under Tracking</h2>
      <Line data={chartData} />
    </div>
  );
};

export default OverUnderChart;
