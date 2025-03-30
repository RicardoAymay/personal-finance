'use client'
import React, { useState } from 'react'
import FinanceMenuNoSSR from '../homepageComponents/FinanceMenuNoSSR';
import Image from 'next/image';
import caretDown from "../../../public/assets/images/icon-caret-down.svg"
import search from "../../../public/assets/images/icon-search.svg"
import TransactionSelect from '../transactionsComponents/TransactionSelect';
import TransactionUL from '../transactionsComponents/TransactionUL';

export type SortOption = "Latest" | "Oldest" | "A to Z" | "Z to A" | "Highest" | "Lowest"
export type CategoryOption = "All Transactions" | "Enternaiment" | "Bills" | "Groceries" | "Dining Out" | "Transportation" | "Personal Care"
const TransactionsPage = () => {
    const [sortBy, setSortBy] = useState<SortOption>("Latest");
    const [category, setCategory] = useState<CategoryOption>("All Transactions")

    const sortList: string[] = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"]
    const categoryList: string[] = ["All Transactions", "Enternaiment", "Bills", "Groceries", "Dining Out", "Transportation", "Personal Care"]

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
                            <TransactionSelect selectTitle='Sort by' imgSrc={caretDown} iterateOver={sortList} sortBy={sortBy} setSortBy={setSortBy} category={category} setCategory={setCategory} />

                            <TransactionSelect selectTitle='Category' imgSrc={caretDown} iterateOver={categoryList} sortBy={sortBy} setSortBy={setSortBy} category={category} setCategory={setCategory}/>
                        </div>
                    </header>
                    <TransactionUL />
                </div>
            </main>
        </div>
    )
}

export default TransactionsPage