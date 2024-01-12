import React, { useState, useEffect } from 'react';
import UserInput from "./userinput";

export default function GAEPage({ onBackClick }) {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    buydate: new Date('2024-01-01'),
    todaydate: new Date(),
    totalday: 0,
    netCashOut: 0,
    fxRate: 0,
    managementFeeRefund: 0,
    convertToRM: 0,
    netProfit: 0,
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

  useEffect(() => {
    // Fetch live exchange rate from USD to MYR (Malaysian Ringgit)
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/USD`
        );
        const data = await response.json();

        // Extract the exchange rate for USD to MYR
        const usdToMyrRate = data.rates.MYR;

        // Update the state with the fetched exchange rate
        setUserInput((prevUserInput) => ({
          ...prevUserInput,
          fxRate: usdToMyrRate,
        }));
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };
    fetchExchangeRate();
  }, []);

  return (
    <div className='p-4'>
      <div className='flex flex-wrap'>
        <div className='p-4 w-full md:w-1/3 md:order-2 '>
          <div className='p-7 border rounded-md bg-yellow-300'>
            <p>GOLD ASSET ENHANCEMENT</p>
            <br></br>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.</p>
          </div>
        </div>

        <div className='p-4 w-full md:w-2/3 md:order-1'>
          <div className='p-4 border rounded-md bg-yellow-300'>
            <h1 className='p-6 sm:p-5 text-3xl sm:text-7xl font-semibold text-gray-800'>Calculator</h1>
            <UserInput userInput={userInput} onChange={handleChange} />
          </div>
        </div>
      </div>

      <button onClick={onBackClick} className='bg-yellow-300 p-4'>Back to Home</button>
    </div>
  );
}
