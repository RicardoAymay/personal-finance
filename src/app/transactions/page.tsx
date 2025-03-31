'use client'
import React, { useState } from 'react'
import FinanceMenuNoSSR from '../homepageComponents/FinanceMenuNoSSR';
import Image from 'next/image';
import caretDown from "../../../public/assets/images/icon-caret-down.svg"
import search from "../../../public/assets/images/icon-search.svg"
import TransactionSelect from '../transactionsComponents/TransactionSelect';
import TransactionUL from '../transactionsComponents/TransactionUL';

export type SortOption = "Latest" | "Oldest" | "A to Z" | "Z to A" | "Highest" | "Lowest"
export type CategoryOption = "All Transactions" | "Entertainment" | "Bills" | "Groceries" | "Dining Out" | "Transportation" | "Personal Care"
const TransactionsPage = () => {
    const [sortBy, setSortBy] = useState<SortOption>("Latest");
    const [category, setCategory] = useState<CategoryOption>("All Transactions")
    const [searchQuery, setSearchQuery] = useState<string>("");

    const sortList: string[] = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"]
    const categoryList: string[] = ["All Transactions", "Entertainment", "Bills", "Groceries", "Dining Out", "Transportation", "Personal Care"]

    return (
        <div className="bg-beige-100 w-full max-w-screen-maxDefined lg:w-full flex flex-col-reverse lg:flex-row h-screen">

            <div className="flex flex-1 mt-400 lg:mt-0 w-full lg:max-w-[300px] h-auto">
                <FinanceMenuNoSSR highlighted="transactions" />
            </div>

            <main className="relative flex flex-col w-full px-200 mt-400 lg:mt-0 md:px-500 lg:py-400">
                <h1 className="text-preset-1">Transactions</h1>
                <div className="w-full bg-white rounded-xl flex flex-col mt-300 p-200 md:p-400">
                    <header className="flex justify-between w-full">
                        <label className="flex items-center border rounded-lg min-w-[215px] w-full me-300 max-w-[320px] bg-white">
                            <input
                                name='searchTransaction'
                                type="text"
                                className="flex-1 focus:outline-none h-full placeholder:text-slate-400 rounded-lg indent-300"
                                placeholder="Search transaction"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Image
                                src={search}
                                alt="Search your transactions here"
                                className="relative right-300 pointer-events-none"
                            />
                        </label>
                        <div className='flex space-x-300 lg:w-full lg:justify-end'>
                            <TransactionSelect selectTitle='Sort by' imgSrc={caretDown} iterateOver={sortList} sortBy={sortBy} setSortBy={setSortBy} category={category} setCategory={setCategory} />

                            <TransactionSelect selectTitle='Category' imgSrc={caretDown} iterateOver={categoryList} sortBy={sortBy} setSortBy={setSortBy} category={category} setCategory={setCategory} />
                        </div>
                    </header>
                    <TransactionUL sortBy={sortBy} category={category} searchQuery={searchQuery} />
                </div>
            </main>
        </div>
    )
}

export default TransactionsPage