import React from 'react';
import data from '../../data.json';

const PotsCards = () => {
  return (
    <ul className="flex flex-wrap gap-y-200">
      {data.pots.slice(0, 4).map((item) => (
        <li className="flex w-1/2 gap-4" key={item.name}>
          <div
            className="w-[4px] h-full rounded-full mr-1"
            style={{ backgroundColor: item.theme }}
          ></div>
          <div>
            <p className="text-preset-5 text-gray-500">{item.name}</p>
            <p className="text-preset-4-bold">${item.total}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PotsCards;