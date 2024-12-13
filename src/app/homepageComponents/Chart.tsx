'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import data from "../../data.json"

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {

  function formattedCurrency(number: number, decimals: number) {
    const USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: decimals,
    });

    return USDollar.format(number);
  }

  const limit = data.budgets.reduce((acc, item) => acc + item.maximum, 0)
  const savings = data.pots.reduce((acc, item)=> acc + item.total , 0)
  const totalData = {
    datasets: [{
      label: 'Budget for this category',
      data: data.budgets.slice(0,4).map((item) => item.maximum),
      cutout: '70',
      borderWidth: 1,
      backgroundColor: ['#277C78', '#82C9D7', '#F2CDAC', '#626070']      
      }],
    }
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute flex flex-col items-center justify-center bg-white w-44 h-44 rounded-full bg-opacity-10 mt-3">
        <p className="text-preset-1 text-grey-900">{formattedCurrency(savings, 2)}</p>
        <p className="text-preset-5 text-grey-500"> {`of ${formattedCurrency(limit, 0)} limit`}</p>
      </div>
      <Doughnut data={totalData} redraw />
    </div>
 
  )
}

export default Chart
