import React from 'react'
import FinanceMenuNoSSR from '../homepageComponents/FinanceMenuNoSSR';
import Image from 'next/image';
import data from "../../data.json"

const TransactionsPage = () => {
    function formattedCurrency(number: number, decimals: number) {
        const USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: decimals,
        });
        return USDollar.format(number);
    }

    const sortList = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"]

    function formatDate(dateToformat: string) {
        const date = new Date(dateToformat);
        const formattedDate = date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        return formattedDate
    }
    return (
        <div className="bg-beige-100 w-full max-w-screen-maxDefined lg:w-full flex flex-col-reverse lg:flex-row">

            <div className="flex flex-1 mt-400 lg:mt-0 w-full max-w-[300px] h-full">
                <FinanceMenuNoSSR highlighted="transactions" />
            </div>

            <main className="relative flex flex-col w-full px-200 mt-400 lg:mt-0 md:px-500 lg:py-400">
                <h1 className="text-preset-1">Transactions</h1>
                <div className="w-full bg-white rounded-xl flex flex-col mt-300 p-200 md:p-400">
                    <header className="flex justify-between">
                        <label>
                                <input className='indent-2' placeholder='Search transaction'/>
                        </label>
                       <div>
                            <label htmlFor="transactionSort" className='text-preset-4 items-center flex text-grey-500'>
                            <p className='me-100'>Sort by</p> 0
                                <select id='transactionSort' className='border rounded-lg px-250 text-preset-4'>
                                    {sortList.map((item)=> (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </label>
                       </div>
                    </header>
                    <ul className="mt-400">
                        {data.transactions.slice(0, 10).map((item) => (
                            <React.Fragment key={item.date}>
                                <li className="flex ">

                                    <figure className="flex items-center">
                                        <Image className="rounded-full" src={item.avatar} width={40} height={40} alt="Picture to who or from who you sent/received your money" />
                                    </figure>
                                    <p className="flex items-center flex-1 ms-4 text-preset-3">
                                        {item.name}
                                    </p>

                                    <div className="flex flex-col items-end">
                                        <p className={item.amount > 0 ? "text-preset-4-bold text-secondary-green" : "text-preset-4-bold"}>
                                            {item.amount > 0 ? "+" : ""}{formattedCurrency(item.amount, 2)}
                                        </p>
                                        <p className="text-preset-5 text-grey-500">
                                            {formatDate(item.date)}
                                        </p>
                                    </div>
                                </li>
                                <hr className="my-200"></hr>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default TransactionsPage