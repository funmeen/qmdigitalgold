import React, { useState } from 'react';
import UserInput from "./gcacalculator";

export default function GCAPage({ onBackClick }) {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    qmBuy: 0,
    priceChanges: 0,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      const updatedUserInput = {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };

      // Calculate totalday
      updatedUserInput.totalday = Math.floor(
        (new Date() - new Date(updatedUserInput.buydate)) / (1000 * 60 * 60 * 24 *10)
      );

      // Calculate convertToRM
      updatedUserInput.convertToRM =
        (parseFloat(updatedUserInput.netCashOut) +
        parseFloat(updatedUserInput.managementFeeRefund)) *
          parseFloat(updatedUserInput.fxRate);

      // Calculate netProfit
      updatedUserInput.netProfit =
        updatedUserInput.convertToRM - updatedUserInput.initialInvestment;

      return updatedUserInput;
    });
  };

    return (
      <div className='p-4'>
        <div className='flex flex-wrap'>
          <div className='p-4 w-full md:w-1/3 md:order-2 '>
            <div className='p-7 border rounded-md bg-yellow-300'>
              <p>GOLD CONVERT ACCOUNT</p>
              <br></br>
              <p>JOM BERBELANJA SAMBIL MENYIMPAN EMAS</p>
              <p>GCA MEMBOLEHKAN ANDA UNTUK TUKAR EMAS KEPADA DUIT TANPA MENJUAL EMAS</p>
            </div>
          </div>
        
          <div className='p-4 w-full md:w-2/3 md:order-1'>
            <div className='p-4 border rounded-md bg-yellow-300'>
              <h1 className='p-6 sm:p-5 text-5xl sm:text-7xl font-semibold text-gray-800'>Calculator</h1>
              
              <UserInput className='items-center justify-center' userInput={userInput} onChange={handleChange} />

            </div>
          </div>
        </div>
  
        
        <button onClick={onBackClick} className='bg-yellow-300 p-4'>Back to Home</button>
      </div>
    );
  }