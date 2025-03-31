import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import data from "../../data.json"
import { Carets } from './CaretsComponent'
import { CategoryOption, SortOption } from '../transactions/page';

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
}

type TransactionULProps = {
    sortBy: SortOption;
    category: CategoryOption;
    searchQuery: string;
};

const TransactionUL: React.FC<TransactionULProps> = ({ sortBy, category, searchQuery }) => {
    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 10;
    // Define mobile breakpoint (adjust as needed)
    const isMobile = useMediaQuery('(max-width: 768px)');
    const maxButtons = isMobile ? 3 : 5;

    useEffect(() => {
        setPage(1);
    }, [searchQuery, category]);

    const filteredTransactions = data.transactions.filter(tx => {
        const matchesCategory = category === "All Transactions" || tx.category === category;
        const matchesSearch = searchQuery.trim() === "" || tx.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const sortedTransactions = [...filteredTransactions];

    switch (sortBy) {
        case "Latest":
            sortedTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            break;
        case "Oldest":
            sortedTransactions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            break;
        case "A to Z":
            sortedTransactions.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "Z to A":
            sortedTransactions.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "Highest":
            sortedTransactions.sort((a, b) => b.amount - a.amount);
            break;
        case "Lowest":
            sortedTransactions.sort((a, b) => a.amount - b.amount);
            break;
    }

    const numberOfPages = Math.ceil(sortedTransactions.length / itemsPerPage);
    const dataSliceStart = (page - 1) * itemsPerPage;
    const dataSliceEnd = dataSliceStart + itemsPerPage;
    const paginatedTransactions = sortedTransactions.slice(dataSliceStart, dataSliceEnd);

    // Calculate the pagination window
    const totalButtons = Math.min(numberOfPages, maxButtons);
    const startPage =
        numberOfPages <= maxButtons
            ? 1
            : Math.max(1, Math.min(page - Math.floor(maxButtons / 2), numberOfPages - totalButtons + 1));
    const pages = Array.from({ length: totalButtons }, (_, i) => startPage + i);

    function formatDate(dateToformat: string) {
        const date = new Date(dateToformat);
        return date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    }

    function formattedCurrency(amount: number, decimals: number) {
        const USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: decimals,
        });
        return USDollar.format(amount);
    }

    function handleAddPage() {
        if (page < numberOfPages) {
            setPage(page + 1);
        }
    }

    function handleSubtractPage() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return (
        <div className='grid grid-cols-6 w-full my-200 justify-between'>
            <div className='w-full mt-400 grid grid-cols-6 col-span-full text-gray-500 text-xs'>
                <p className='col-span-3'>Recipient/Sender</p>
                <p>Category</p>
                <p>Transaction date</p>
                <p className='text-right'>Amount</p>
            </div>

            <ul className="w-full col-span-6">
                {paginatedTransactions.map((item) => (
                    <React.Fragment key={item.date + item.name + item.amount}>
                        <hr className="my-200 border border-beige-100" />
                        <li className="grid grid-cols-6">
                            <div className='flex col-span-3'>
                                <figure className="flex items-center">
                                    <Image
                                        className="rounded-full"
                                        src={item.avatar}
                                        width={40}
                                        height={40}
                                        alt="Picture to who or from who you sent/received your money"
                                    />
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
                            <p className={item.amount > 0
                                ? "text-preset-4-bold text-secondary-green text-right"
                                : "text-preset-4-bold text-right"
                            }>
                                {item.amount > 0 ? "+" : ""}
                                {formattedCurrency(item.amount, 2)}
                            </p>
                        </li>
                    </React.Fragment>
                ))}
            </ul>

            <div className="w-full flex justify-between col-span-6 pt-300">
                <button
                    onClick={handleSubtractPage}
                    className="flex border rounded-lg w-24 justify-center h-11 items-center space-x-150"
                >
                    <Carets svgName="caretLeft" heightSvg={12} widthSvg={16} />
                    <p>Prev</p>
                </button>

                <div className='flex gap-100'>
                    {pages.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => setPage(pageNumber)}
                            className={
                                pageNumber === page
                                    ? "h-10 w-10 rounded-lg p-200 border flex items-center bg-gray-900 text-white"
                                    : "h-10 w-10 rounded-lg p-200 border flex items-center"
                            }
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleAddPage}
                    className="flex border rounded-lg w-24 justify-center h-11 items-center space-x-150"
                >
                    <p>Next</p>
                    <Carets svgName="caretRight" heightSvg={12} widthSvg={16} />
                </button>
            </div>
        </div>
    );
}

export default TransactionUL;
