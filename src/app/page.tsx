'use client'
import FinanceMenu from "./homepageComponents/FinanceMenu";
import Image from "next/image";
import PotsCards from "./homepageComponents/PotsCards";
import data from "../data.json"
import React from "react";

export type Highlited = "overview" | "transactions" | "budgets" | "pots" | "recurring bills";


export default function Home() {
const totalSaved = data.pots.reduce((acc, item) => acc + item.total, 0)
const overviewValues = data.balance

function formattedCurrency(number: number, decimals: number) {
    const USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: decimals,
    });
    return USDollar.format(number);
  }

  function formatDate (dateToformat: string){
    const date = new Date(dateToformat);
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      return formattedDate
  }
  

return (
    <div className="bg-beige-100 flex max-w-screen-maxDefined w-full">
        <FinanceMenu highlighted="overview" />
        <main className="flex flex-col flex-1 px-500 py-400">

            <h1 className="text-preset-1">Overview</h1>

            <section className="w-full flex gap-300 my-400">
                <div className="w-full bg-grey-900 text-white p-300 rounded-xl">
                    <p className="mb-150 text-preset-4">Current Balance</p>
                    <p className="text-preset-1">{formattedCurrency(overviewValues.current, 2)}</p>
                </div>
                <div className="w-full p-300 bg-white rounded-xl">
                    <p className="mb-150 text-preset-4 text-grey-500">Income</p>
                    <p className="text-preset-1">{formattedCurrency(overviewValues.income, 2)}</p>
                </div>
                <div className="w-full p-300 bg-white rounded-xl">
                    <p className="mb-150 text-preset-4 text-grey-500">Expenses</p>
                    <p className="text-preset-1">{formattedCurrency(overviewValues.expenses, 2)}</p>
                </div>
            </section>

            <section>
                {/* left side */}
                <div className="w-7/12"> 

                    <div className="flex flex-col w-full bg-white p-400 gap-250 rounded-xl">
                        <header className="w-full flex justify-between">
                            <h2 className="text-preset-2 text-grey-900">Pots </h2>
                            <p className="flex text-center items-center justify-center text-preset-4 text-grey-500 gap-150">See Details <Image src="/assets/images/icon-caret-right.svg" height={5} width={5} alt="See details"/> </p>
                        </header>
                        <div className="w-full flex gap-200">

                            <div className="flex bg-beige-100 py-200 ps-200 pe-250 w-5/12 rounded-xl">
                                
                                <Image src="/assets/images/icon-pot.svg" width={40} height={40} alt="Total saved"/>
                        
                                <div className="ps-200">
                                    <p className="text-preset-4 text-grey-500">Total Saved</p>
                                    <p className="text-preset-1">{formattedCurrency(totalSaved, 0)}</p>
                                </div>
                            </div>
                            <PotsCards/>
                        </div>
                    </div>

                    <div className="w-full bg-white rounded-xl flex flex-col mt-300 p-400">
                        <header className="flex justify-between">
                            <p className="text-preset-2">
                                Transactions
                            </p>
                            <p className="flex text-center items-center justify-center text-preset-4 text-grey-500 gap-150">View all<Image src="/assets/images/icon-caret-right.svg" height={5} width={5} alt="See details"/> </p>
                        </header>
                        <ul className="mt-400">
                        {data.transactions.slice(0,5).map((item) => (
                            <React.Fragment key={item.date}>
                                <li className="flex ">
                                    
                                    <figure className="flex items-center">
                                        <Image className="rounded-full" src={item.avatar} width={40} height={40} alt="Picture to who or from who you sent/received your money"/>
                                    </figure>
                                    <p className="flex items-center flex-1 ms-4 text-preset-3">
                                        {item.name}
                                    </p>

                                    <div className="flex flex-col items-end">
                                        <p className={item.amount >0?"text-preset-4-bold text-secondary-green": "text-preset-4-bold"}>
                                        {item.amount>0?"+":""}{formattedCurrency(item.amount, 2)}
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
                </div>
                <div>
                    {/* budgets and recurring bills */}
                </div>
            </section>
        </main>
    </div>
    
)
}
