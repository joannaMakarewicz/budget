import React from 'react';
import Sum from './Sum/Sum';
import '../Summary/Summary.css';

const Summary = () => {
  return (
    <div className='summary mt-4 mb-4'>
      <h2 className='summary__heading text-start p-2'>Summary of your expenses</h2>
      <Sum/>
    </div>
  )
}

export default Summary
