'use client';
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import SvgComponents from "./SvgComponents";
import Link from "next/link";

export type ShowOneOf = "overview" | "transactions" | "budgets" | "pots" | "recurring bills";

interface FinanceMenuProps {
    highlighted: ShowOneOf;
}

const FinanceMenu = ({ highlighted }: FinanceMenuProps) => {
    const [minimizedMenu, setMinimizedMenu] = useState(false);
    const [touchLeft, setTouchLeft] = useState(false);
    const menuRef = useRef<HTMLElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const checkIfTouchingLeft = useCallback(() => {
        if (menuRef.current) {
            const position = menuRef.current.getBoundingClientRect();
            setTouchLeft(position.left <= 0);
        }
    }, []);

    const handleResize = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            checkIfTouchingLeft();
        }, 200);
    }, [checkIfTouchingLeft]);

    useEffect(() => {
        checkIfTouchingLeft();
        window.addEventListener("resize", handleResize);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize, checkIfTouchingLeft]);

    const menuList = [
        { imgPath: "/assets/images/icon-nav-overview.svg", title: "Overview" },
        { imgPath: "/assets/images/icon-nav-transactions.svg", title: "Transactions" },
        { imgPath: "/assets/images/icon-nav-budgets.svg", title: "Budgets" },
        { imgPath: "/assets/images/icon-nav-pots.svg", title: "Pots" },
        { imgPath: "/assets/images/icon-nav-recurring-bills.svg", title: "Recurring bills" },
    ];

    const minimizeText = { imgPath: "/assets/images/icon-minimize-menu.svg", title: "Minimize menu" };
    const validValues: ShowOneOf[] = ["overview", "transactions", "budgets", "pots", "recurring bills"];

    return (
        <aside
            ref={menuRef}
            className={`${
                minimizedMenu ? "finance-menu-bottom lg:finance-menu-minimized" : "finance-menu-bottom lg:finance-menu"
            } ${touchLeft ? "lg:rounded-r-2xl" : "lg:rounded-2xl"}`}
        >
            <header className="text-preset-1 text-white py-500 px-400 lg:block hidden bg-inherit w-full">
                f<span
                    className={
                        minimizedMenu
                            ? "opacity-0 ease-in-out duration-700"
                            : "opacity-100 ease-in-out duration-1000"
                    }
                >
                    inance
                </span>
            </header>
            <nav className="flex flex-1 w-full items-center justify-center lg:items-start lg:justify-start bg-inherit">
                <ul className="flex lg:flex-col pt-100 lg:pt-0 lg:items-start justify-around md:justify-between lg:justify-start md:gap-4 w-full md:px-200 lg:px-0 lg:w-10/12">
                    {menuList.map((item) => (
                        <li
                            key={item.title}
                            data-value={item.title}
                            className={`${
                                item.title.toLowerCase() === highlighted
                                    ? "bg-beige-100 w-auto lg:w-full rounded-t-2xl lg:rounded-none pt-200 border-b-4 border-b-secondary-green lg:border-b-0 lg:border-s-4 lg:border-s-secondary-green flex text-grey-900 text-preset-5-bold lg:text-preset-3 lg:ps-400 lg:py-200 px-300 lg:rounded-r-lg"
                                    : "px-300 text-preset-5-bold lg:text-preset-3 border-b-4 border-b-transparent lg:border-s-4 border-s-transparent text-grey-300 py-200"
                            }`}
                        >
                            <Link
                                href={item.title === "Overview"?'/':`/${item.title.toLowerCase()}`}
                                className="flex gap-5 lg:flex-row flex-col items-center lg:justify-start justify-center"
                            >
                                <figure className="w-fit">
                                    <SvgComponents
                                        highlighted={highlighted}
                                        show={
                                            validValues.includes(item.title.toLowerCase() as ShowOneOf)
                                                ? (item.title.toLowerCase() as ShowOneOf)
                                                : "overview"
                                        }
                                    />
                                </figure>
                                <span
                                    className={
                                        minimizedMenu
                                            ? "-translate-x-48 ease-in-out text-nowrap duration-1000 opacity-0 pointer-events-none"
                                            : "ease-in-out hidden md:block duration-1000 cursor-pointer"
                                    }
                                >
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <footer className="relative text-preset-3 hidden lg:flex gap-5 text-grey-300 py-300 ps-400">
                <Image
                    onClick={() => setMinimizedMenu(!minimizedMenu)}
                    src={minimizeText.imgPath}
                    width={24}
                    height={24}
                    alt={minimizeText.title}
                    className={
                        minimizedMenu
                            ? "-scale-x-100 ease-in-out duration-200 cursor-pointer"
                            : "relative cursor-pointer ease-in-out duration-200"
                    }
                />
                <span
                    className={
                        minimizedMenu
                            ? "-translate-x-52 text-nowrap overflow-hidden opacity-0 ease-in-out duration-1000 pointer-events-none"
                            : " text-nowrap ease-in-out duration-1000 cursor-pointer"
                    }
                    onClick={() => setMinimizedMenu(!minimizedMenu)}
                >
                    {minimizeText.title}
                </span>
            </footer>
        </aside>
    );
};

export default FinanceMenu;
