import React, { useEffect, useState } from 'react';
import Sum from './Sum/Sum';
import axiosInstance from '../../services/config';
import '../Summary/Summary.css';

const Summary = () => {
  const [expenses, setExpenses] = useState([])

  const getExpenses = async () => {
    await axiosInstance.get("/expenses?sort%5B0%5D%5Bfield%5D=date").then((response) => {
      setExpenses(response.data.records);
    });
  };

 
  useEffect(() => {
    getExpenses();
  }, [expenses]);

  return (
    <div className='summary mt-4 mb-4'>
      <h2 className='summary__heading text-start p-2'>Summary of your expenses</h2>
      {expenses.map((el) => {
        return (
          <Sum expensesItem={el} key={el.id}/>
        )
      })}
    </div>
  )
}

export default Summary
