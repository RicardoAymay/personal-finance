'use client'
import { useState } from "react";
import FinanceMenu from "./homepageComponents/FinanceMenu";

export type Highlited = "overview" | "transactions" | "budgets" | "pots" | "recurring bills";
export default function Home() {
    const [highlighted, setHighlited] = useState<Highlited>("overview");
return (
    <div className="bg-beige-100 flex">
        <FinanceMenu highlighted="overview"/>
        <div className="flex flex-col">
            <h1>Overview</h1>
            <div>
                {/* 3 cards here */}
            </div>
            <div>
                <div>
                    {/* pots and transactions */}
                </div>
                <div>
                    {/* budgets and recurring bills */}
                </div>
            </div>
        </div>
    </div>
    
)
}
