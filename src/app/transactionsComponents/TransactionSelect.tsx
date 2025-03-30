import Image from 'next/image'
import React from 'react'
interface TransactionSelectProps {
    selectTitle: string,
    iterateOver: string[],
    imgSrc: string
}

const TransactionSelect = ({ iterateOver, selectTitle, imgSrc }: TransactionSelectProps) => {
    return (

        <label htmlFor="transactionSort" className='text-preset-4 relative items-center flex text-grey-500 w-56'>
            <p className='left-0 me-2'>{selectTitle}</p>
            <div className='flex border rounded-lg overflow-hidden relative right-0 bg-none h-8 w-3/4 text-xs text-grey-900'>
                <select id='transactionSort' className='w-full rounded-lg px-250 py-100 mr-100 bg-transparent appearance-none'>

                    {iterateOver.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>

                <Image className='absolute right-150 top-1/2 -translate-y-1/2 pointer-events-none' width={16} height={16} src={imgSrc} alt='Show more'></Image>
            </div>

        </label>

    )
}

export default TransactionSelect