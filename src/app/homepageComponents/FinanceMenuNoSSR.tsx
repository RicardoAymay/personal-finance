'use client'
import dynamic from 'next/dynamic';

const FinanceMenuNoSSR = dynamic(() => import('./FinanceMenu'), { ssr: false });

export default FinanceMenuNoSSR;

