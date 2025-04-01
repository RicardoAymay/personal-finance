'use client'
import dynamic from 'next/dynamic';

const FinanceMenuNoSSR = dynamic(() => import('./FinanceMenu'), {
  ssr: false,
  loading: () => (
    <nav className="finance-menu">
      {/* Provide minimal markup that closely resembles FinanceMenu's structure */}
    </nav>
  ),
});

export default FinanceMenuNoSSR;

