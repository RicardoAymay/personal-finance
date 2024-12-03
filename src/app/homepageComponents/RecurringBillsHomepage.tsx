import React from 'react'


type CardProps = {
  label: string;
  amount: string;
  color?: string; // Optional color for the left bar
};

const RecurringBills= ({ label, amount }:CardProps ) => {
  return (
      <div className="relative w-full border-l-4 border-secondary-green h-full flex items-center justify-between px-200 py-250 bg-beige-100 rounded-lg">
        <div className='flex items-center justify-between w-full'>
          <div className="flex-1">
            <p className="text-grey-500 text-preset-4">{label}</p>
          </div>

          <p className="text-black text-preset-4-bold">${amount}</p>
        </div>
      </div>
  );
};

export default RecurringBills;
