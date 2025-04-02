'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { CategoryOption, SortOption } from '../transactions/page'
import inconFilter from '../../../public/assets/images/icon-filter-mobile.svg'
import iconSort from '../../../public/assets/images/icon-sort-mobile.svg'

interface TransactionSelectProps {
  selectTitle: "Sort by" | "Category",
  iterateOver: string[],
  imgSrc: string,
  sortBy: SortOption,
  setSortBy: React.Dispatch<React.SetStateAction<SortOption>>,
  category: CategoryOption,
  setCategory: React.Dispatch<React.SetStateAction<CategoryOption>>,
}

const TransactionSelect = ({
  iterateOver,
  selectTitle,
  imgSrc,
  sortBy,
  category,
  setSortBy,
  setCategory,
}: TransactionSelectProps) => {
  const [filterModal, setFilterModal] = useState(false)
  const [sortModal, setSortModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (selectTitle === "Sort by") {
      setSortBy(value as SortOption)
    } else {
      setCategory(value as CategoryOption)
    }
  }

  const handleModal = (selectTitle: string) => {
    if (selectTitle === "Sort by") {
      setSortModal(!sortModal)
    } else {
      setFilterModal(!filterModal)
    }
  }

  const getBold = selectTitle === "Sort by" ? sortBy : category

  return (
    <>
      {/* Desktop version */}
      <label
        htmlFor={selectTitle}
        className="hidden text-preset-4 md:flex items-center text-grey-500 max-w-56 w-full"
      >
        <p className="me-2 w-14">{selectTitle}</p>
        <div className="flex border rounded-lg overflow-hidden bg-none h-11 w-fit text-xs text-grey-900">
          <select
            id={selectTitle}
            className={
              selectTitle === 'Sort by'
                ? "w-full rounded-lg min-w-28 ps-300 pe-400 py-100 bg-transparent focus:outline-none cursor-pointer appearance-none text-gray-900 font-semibold"
                : "w-full min-w-44 rounded-lg ps-300 pe-400 py-100 bg-transparent focus:outline-none cursor-pointer appearance-none text-gray-900 font-semibold"
            }
            data-select={selectTitle}
            value={selectTitle === "Sort by" ? sortBy : category}
            onChange={handleChange}
          >
            {iterateOver.map((item) => (
              <option
                key={item}
                value={item}
                className={getBold === item ? "font-bold" : "font-normal"}
              >
                {item}
              </option>
            ))}
          </select>
          <Image
            className={`relative top-1/2 ${selectTitle === "Sort by" ? "right-250" : "right-12"} -translate-y-1/2 pointer-events-none`}
            width={16}
            height={16}
            src={imgSrc}
            alt="Show more"
          />
        </div>
      </label>

      {/* Mobile version */}
      <div className="md:hidden">
        
        <button onClick={() => handleModal(selectTitle)}>
          <Image
            src={selectTitle === "Sort by" ? iconSort : inconFilter}
            alt={selectTitle === "Sort by" ? "Sort transactions" : "Filter transactions"}
          />
        </button>

        
        {(selectTitle === "Sort by" ? sortModal : filterModal) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 w-3/4">
              <h2 className="mb-4 font-bold">
                {selectTitle === "Sort by" ? "Choose a sort option" : "Choose a category"}
              </h2>
              <ul>
                {iterateOver.map((item) => (
                  <li
                    key={item}
                    className="py-2 cursor-pointer hover:font-bold"
                    onClick={() => {
                      if (selectTitle === "Sort by") {
                        setSortBy(item as SortOption)
                        setSortModal(false)
                      } else {
                        setCategory(item as CategoryOption)
                        setFilterModal(false)
                      }
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className="mt-4 text-sm underline"
                onClick={() =>
                  selectTitle === "Sort by" ? setSortModal(false) : setFilterModal(false)
                }
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default TransactionSelect
