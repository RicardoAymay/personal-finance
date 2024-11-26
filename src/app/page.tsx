'use client'
import FinanceMenu from "./homepageComponents/FinanceMenu";
import inconCarretRight from "../assets/images/icon-caret-right.svg"
import iconPot from "../assets/images/icon-pot.svg"
import Image from "next/image";
import PotsCards from "./homepageComponents/PotsCards";
import data from "../data.json"
export type Highlited = "overview" | "transactions" | "budgets" | "pots" | "recurring bills";

export default function Home() {
const totalSaved = data.pots.reduce((acc, item) => acc + item.total, 0)
return (
    <div className="bg-beige-100 flex max-w-screen-maxDefined w-full">
        <FinanceMenu highlighted="overview" />
        <main className="flex flex-col flex-1 px-500 py-400">
            <h1 className="text-preset-1">Overview</h1>
            <section className="w-full flex gap-300 my-400">
                <div className="w-full bg-grey-900 text-white p-300 rounded-xl">
                    <p className="mb-150 text-preset-4">Current Balance</p>
                    <p className="text-preset-1">$4,836.00</p>
                </div>
                <div className="w-full p-300 bg-white rounded-xl">
                    <p className="mb-150 text-preset-4 text-grey-500">Income</p>
                    <p className="text-preset-1">$3,814.25</p>
                </div>
                <div className="w-full p-300 bg-white rounded-xl">
                    <p className="mb-150 text-preset-4 text-grey-500">Expenses</p>
                    <p className="text-preset-1">$1,700.50</p>
                </div>
            </section>
            <section>
                <div className="w-7/12">
                    <div className="flex flex-col w-full bg-white p-400 gap-250 rounded-xl">
                        <header className="w-full flex justify-between">
                            <h2 className="text-preset-2 text-grey-900">Pots </h2>
                            <p className="flex text-center items-center justify-center text-preset-4 text-grey-500 gap-150">See Details <Image src={inconCarretRight} height={10} alt="See details"/> </p>
                        </header>
                        <div className="w-full flex gap-200">
                            <div className="flex bg-beige-100 py-200 ps-200 pe-250 w-5/12 rounded-xl">
                                
                                <Image src={iconPot} alt="Total saved"/>
                        
                                <div className="ps-200">
                                    <p className="text-preset-4 text-grey-500">Total Saved</p>
                                    <p className="text-preset-1">${totalSaved}</p>
                                </div>
                            </div>
                            <PotsCards/>
                            
                        </div>
                    </div>
                    <div className="w-7/12 flex flex-col">
                        <div>
                            <figure>
                                {/* <Image */}
                            </figure>
                            <p>
                                {/* person name */}
                            </p>
                        </div>
                        <div>
                            <p>
                                {/* transaction value */}
                            </p>
                            <p>
                                {/* transaction date */}
                            </p>
                        </div>
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
