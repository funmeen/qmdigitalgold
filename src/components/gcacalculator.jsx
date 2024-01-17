import React, { useState, useEffect, useCallback } from 'react';

export const currencyformatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MYR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

export default function GcaCalculator({ onChange, userInput }) {
  const [tableData, setTableData] = useState([]);

  // Function to calculate and update table data
  const updateTableData = useCallback(() => {
    const { initialInvestment, qmBuy } = userInput;

    const monthlyData = Array.from({ length: 12 }, (_, month) => {
      const saving = initialInvestment;
      const survive = initialInvestment * (85 / 100);
      const gram = initialInvestment / qmBuy / 1.07;

      return {
        month: month + 1,
        saving: saving,
        survive: survive,
        goldPrice: currencyformatter.format(qmBuy),
        gram: gram.toFixed(2),
      };
    });

    const annualReport = {
      month: 'Annual',
      saving: monthlyData.reduce((sum, row) => sum + parseFloat(row.saving), 0).toFixed(0),
      survive: monthlyData.reduce((sum, row) => sum + parseFloat(row.survive), 0).toFixed(0),
      goldPrice: '',
      gram: monthlyData.reduce((sum, row) => sum + parseFloat(row.gram), 0).toFixed(0),
    };

    setTableData([...monthlyData, annualReport]);
  }, [userInput]);

  // Update table data when userInput changes
  useEffect(() => {
    updateTableData();
  }, [userInput, updateTableData]);

  return (
    <div>
      <section id="user-input">
        <div className='ml-7'>
          <p className='mb-2'>
            <label className='text-2xl'>Modal (MYR)</label>
          </p>
          <p>
            <input
              className='text-2xl mb-4'
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(event) =>
                onChange('initialInvestment', event.target.value)
              }
            />
          </p>
          
          <p className='mb-2'>
            <label className='text-2xl'>QM Buy (MYR)</label>
          </p>
          <p>
            <input
              className='text-2xl mb-4'
              type="number"
              required
              value={userInput.qmBuy}
              onChange={(event) =>
                onChange('qmBuy', event.target.value)
              }
            />
          </p>

          <p className='mb-2'>
            <label className='text-2xl'>Kenaikan Harga Emas</label>
          </p>
          <p>
            <input
              className='text-2xl mb-6'
              type="number"
              required
              value={userInput.priceChanges}
              onChange={(event) =>
                onChange('priceChanges', event.target.value)
              }
            />
          </p>
          
        </div>
      </section>
        <div className='flex-col'>
            <table className='mx-auto border-collapse border border-black'>
                <thead>
                    <tr>
                    <th className='text-center text-xl pl-1 pr-1 border border-black'>Month</th>
                    <th className='text-center text-xl pl-1 pr-1 border border-black'>Saving</th>
                    <th className='text-center text-xl pl-1 pr-1 border border-black'>Survive</th>
                    <th className='text-center text-xl pl-1 pr-1 border border-black'>Gold Price</th>
                    <th className='text-center text-xl pl-1 pr-1 border border-black'>Gram</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((rowData, index) => (
                    <tr key={index}>
                        <td className='text-center border border-black'>{rowData.month}</td>
                        <td className='text-center pl-1 border border-black'>{currencyformatter.format(rowData.saving)}</td>
                        <td className='text-center pl-1 border border-black'>{currencyformatter.format(rowData.survive)}</td>
                        <td className='text-center pl-1 border border-black'>{rowData.goldPrice}</td>
                        <td className='text-center pl-1 border border-black'>{rowData.gram} g</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}
