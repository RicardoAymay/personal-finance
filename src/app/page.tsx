'use client'
import FinanceMenu from "./homepageComponents/FinanceMenu";
import Image from "next/image";
import PotsCards from "./homepageComponents/PotsCards";
import data from "../data.json"
import React from "react";
import BudgetsCards from "./homepageComponents/BudgetsCards";
import Chart from "./homepageComponents/Chart";
import RecurringBills from "./homepageComponents/RecurringBillsHomepage";


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
        <div className="bg-beige-100 max-w-screen-maxDefined lg:w-full h-screen flex flex-col-reverse lg:flex-row">
            <FinanceMenu highlighted="overview" />
            <main className="flex flex-col px-200 mt-400 lg:mt-0 md:px-500 lg:py-400 h-screen">

                <h1 className="text-preset-1">Overview</h1>

                <section className="w-full flex-wrap md:flex-nowrap flex gap-300 my-400">
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

                <section className="flex flex-col lg:flex-row">
                    {/* left side */}
                    <div className="lg:w-7/12 w-full">

                        <div className="flex flex-col w-full bg-white p-400 gap-250 rounded-xl">
                            <header className="w-full flex justify-between">
                                <h2 className="text-preset-2 text-grey-900">Pots </h2>
                                <p className="flex text-center items-center justify-center text-preset-4 text-grey-500 gap-150">See Details <Image src="/assets/images/icon-caret-right.svg" height={5} width={5} alt="See details" /> </p>
                            </header>
                            <div className="w-full flex flex-col md:flex-row gap-200">

                                <div className="flex items-center bg-beige-100 py-200 ps-200 pe-250 w-full md:w-5/12 min-w-44 rounded-xl">

                                    <Image src="/assets/images/icon-pot.svg" width={40} height={40} alt="Total saved" />

                                    <div className="ps-200 flex flex-col">
                                        <p className="text-preset-4 text-grey-500">Total Saved</p>
                                        <p className="text-preset-1">{formattedCurrency(totalSaved, 0)}</p>
                                    </div>
                                </div>
                                <PotsCards />
                            </div>
                        </div>

                        <div className="w-full bg-white rounded-xl flex flex-col mt-300 p-400">
                            <header className="flex justify-between">
                                <p className="text-preset-2">
                                    Transactions
                                </p>
                                <p className="flex text-center items-center justify-center text-preset-4 text-grey-500 gap-150">View all<Image src="/assets/images/icon-caret-right.svg" height={5} width={5} alt="See details" /> </p>
                            </header>
                            <ul className="mt-400">
                                {data.transactions.slice(0, 5).map((item) => (
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
                    </div>

                    {/* right side */}
                    <div className="flex flex-col lg:ms-300 lg:w-5/12 min-w-96 justify-between mt-200 lg:mt-0">
                        <div className="bg-white w-full p-400 rounded-xl">
                            <header className="flex justify-between w-full mb-250">
                                <p className="text-preset-2">
                                    Budgets
                                </p>
                                <p className="flex text-center items-center justify-center text-preset-4 text-grey-500 gap-150">View all<Image src="/assets/images/icon-caret-right.svg" height={5} width={5} alt="See details" /> </p>
                            </header>
                            <div className="flex flex-col md:flex-row">
                                <div className="flex flex-1 justify-center items-center ">
                                    <div className="max-w-[240px] w-full mb-2">
                                        <Chart />
                                    </div>
                                </div>
                                <div className="ms-200 w-full lg:w-5/12 md:flex md:justify-end mt-4">
                                    <BudgetsCards />
                                </div>
                            </div>
                        </div>
                    <div className="flex p-400 flex-col bg-white rounded-xl mt-300 w-full">
                        <header className="flex justify-between w-full">
                            <p className="text-preset-2">
                                Recurring bills
                            </p>
                            <p className="flex text-center items-center justify-center text-preset-4 text-grey-500 gap-150">View all<Image src="/assets/images/icon-caret-right.svg" height={5} width={5} alt="See details" /> </p>
                        </header>
                        <ul className="flex flex-col gap-150 mt-400">
                            <li className="flex flex-col">
                                <RecurringBills label="Paid Bills" amount="190.00"/>
                            </li>
                            <li className="flex flex-col">
                                <RecurringBills label="Total Upcoming" amount="194.98"/>
                            </li>
                            <li className="flex flex-col">
                                <RecurringBills label="Due Soon" amount="59.98"/>
                            </li>
                        </ul>   
                    </div>
                    </div>
                </section>
            </main>
        </div>

    )
}
