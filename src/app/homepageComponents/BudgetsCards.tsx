import React from 'react';
import data from '../../data.json';

const BudgetsCards = () => {
    function formattedCurrency(number: number, decimals: number) {
        const USDollar = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: decimals,
        });
        return USDollar.format(number);
      }
  return (
    <ul className="flex flex-wrap w-32 gap-y-200">
      {data.budgets.slice(0, 4).map((item) => (
        <li className="flex w-full gap-4" key={item.category}>
          <div
            className="w-[4px] h-full rounded-full mr-1"
            style={{ backgroundColor: item.theme }}
          ></div>
          <div>
            <p className="text-preset-5 text-gray-500">{item.category}</p>
            <p className="text-preset-4-bold">{formattedCurrency(item.maximum, 2)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BudgetsCards;