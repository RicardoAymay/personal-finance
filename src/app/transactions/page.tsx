import React from 'react'
import FinanceMenuNoSSR from '../homepageComponents/FinanceMenuNoSSR';
import Image from 'next/image';
import data from "../../data.json"
import caretDown from "../../../public/assets/images/icon-caret-down.svg"
import search from "../../../public/assets/images/icon-search.svg"
import TransactionSelect from '../transactionsComponents/TransactionSelect';



const TransactionsPage = () => {
    function formattedCurrency(number: number, decimals: number) {
        const USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: decimals,
        });
        return USDollar.format(number);
    }

    const sortList: string[] = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"]
    const categoryList: string[] = ["Enternaiment", "Bills", "Groceries", "Dining Out", "Transportation", "Personal Care"]
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
                        <label className=' relative flex overflow-hidden z-10 border rounded-lg px-250 py-150 w-[320px] justify-between'>
                            <input className='absolute top-0 left-0 ps-150 w-full h-full bg-red-50' placeholder='Search transaction' />
                            <Image className='absolute right-150' src={search} alt='Search your transactions here' />
                        </label>
                        <div className='flex space-x-300'>
                            <TransactionSelect selectTitle='Sort by' imgSrc={caretDown} iterateOver={sortList} />

                            <TransactionSelect selectTitle='Category' imgSrc={caretDown} iterateOver={categoryList} />
                        </div>
                    </header>
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
                </div>
            </main>
        </div>
    )
}

export default TransactionsPage