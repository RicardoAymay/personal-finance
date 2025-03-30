import Image from 'next/image'
import React from 'react'
import data from "../../data.json"
const TransactionUL = () => {
    function formatDate(dateToformat: string) {
        const date = new Date(dateToformat);
        const formattedDate = date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        return formattedDate
    }
    function formattedCurrency(number: number, decimals: number) {
        const USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: decimals,
        });
        return USDollar.format(number);
    }
  return (
    <ul className="mt-400">
    <div className='grid grid-cols-6 w-fullmy-200 justify-between'>
        <p className='col-span-3'>Recipient/Sender</p>
        <p>Category</p>
        <p>Transaction date</p>
        <p className='text-right'>Amount</p>
    </div>
    {data.transactions.slice(0, 10).map((item) => (
        <React.Fragment key={item.date}>
            <hr className="my-200 border border-beige-100"></hr>
            <li className="grid grid-cols-6">
                <div className='flex col-span-3'>
                    <figure className="flex items-center">
                        <Image className="rounded-full" src={item.avatar} width={40} height={40} alt="Picture to who or from who you sent/received your money" />
                    </figure>
                    <figcaption className="flex items-center flex-1 ms-4 text-preset-3">
                        {item.name}
                    </figcaption>
                </div>

                <p className="text-preset-5 text-grey-500 w-32">
                    {item.category}
                </p>
                <p className="text-preset-5 text-grey-500">
                    {formatDate(item.date)}
                </p>
                <p className={item.amount > 0 ? "text-preset-4-bold text-secondary-green text-right" : "text-preset-4-bold text-right"}>
                    {item.amount > 0 ? "+" : ""}{formattedCurrency(item.amount, 2)}
                </p>

            </li>
            
        </React.Fragment>
    ))}
</ul>
  )
}

export default TransactionUL