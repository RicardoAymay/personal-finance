'use client'
import house from "../../assets/images/icon-nav-overview.svg"
import arrow from "../../assets/images/icon-nav-transactions.svg"
import pizza from "../../assets/images/icon-nav-budgets.svg"
import moneybag from "../../assets/images/icon-nav-pots.svg"
import bill from "../../assets/images/icon-nav-recurring-bills.svg"
import minimizeArrow from "../../assets/images/icon-minimize-menu.svg"
import Image from "next/image"
import { useState } from "react"

import SvgComponents from "./SvgComponents"

import Link from "next/link"



export type ShowOneOf = "overview" | "transactions" | "budgets" | "pots" | "recurring bills"

interface FinanceMenuProps {
    highlighted: ShowOneOf;
  }
  
const FinanceMenu = ({highlighted}: FinanceMenuProps) => {
    const [minimizedMenu, setMinimizedMenu] = useState(false)
    
    const menuList = [
        {imgPath: house, title: "Overview"},
        {imgPath: arrow, title: "Transactions"},
        {imgPath: pizza, title: "Budgets"},
        {imgPath: moneybag, title: "Pots"},
        {imgPath: bill, title: "Recurring bills"},
    ]
    const minimizeText = {imgPath: minimizeArrow, title: "Minimize menu"}
    const validValues: ShowOneOf[] = ["overview", "transactions", "budgets", "pots", "recurring bills"];

  return (
    <aside className={minimizedMenu? "finance-menu-minimized":"finance-menu"}>
        <header className="text-preset-1 text-white py-500 px-400">f<span className={minimizedMenu?"opacity-0 ease-in-out duration-700":"opacity-100 ease-in-out duration-1000"}>inance</span></header>
        <nav className="flex flex-1">
            <ul className="flex flex-col gap-4 w-10/12">
                {
                menuList.map((item) => (
                    <li key={item.title} data-value={item.title} className={item.title.toLowerCase() === highlighted? "bg-beige-100 text-grey-900 text-preset-3 ps-400 py-200 rounded-r-lg":"ps-400 text-preset-3 text-grey-300 py-200"}>
                        <Link href={`/${item.title.toLowerCase()}`} className="flex gap-5">
                            <figure className="w-1/8">
                                <SvgComponents highlighted={highlighted} show={validValues.includes(item.title.toLowerCase() as ShowOneOf) ? (item.title.toLowerCase() as ShowOneOf) : "overview"}/>
                            </figure>
                            <span className={minimizedMenu?"-translate-x-52 ease-in-out text-nowrap duration-1000 cursor-pointer": "ease-in-out text-nowrap duration-1000 cursor-pointer"}>{item.title}</span>
                        </Link>
                    </li>
                ))
            } 
            </ul>
        </nav>
            <footer className="relative text-preset-3 flex gap-5 text-grey-300 py-300 ps-400">
                <Image onClick={()=>setMinimizedMenu(!minimizedMenu)} src={minimizeText.imgPath} alt={minimizeText.title} className={minimizedMenu?"-scale-x-100 ease-in-out duration-200 cursor-pointer":"relative cursor-pointer ease-in-out duration-200"}/>
                <span className={minimizedMenu? "-translate-x-52 text-nowrap overflow-hidden opacity-0 ease-in-out duration-1000 cursor-pointer"
                : " text-nowrap ease-in-out duration-1000 cursor-pointer"} onClick={()=>setMinimizedMenu(!minimizedMenu)}>{minimizeText.title}</span>
            </footer>
    </aside>
  )
}

export default FinanceMenu