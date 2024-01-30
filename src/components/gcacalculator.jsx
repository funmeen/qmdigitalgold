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
      const savingTrd = initialInvestment * (15 / 100);
      const survive = initialInvestment * (85 / 100);
      const gram = initialInvestment / qmBuy / 1.07;

      return {
        month: month + 1,
        saving: saving,
        savingTrd : savingTrd,
        survive: survive,
        goldPrice: currencyformatter.format(qmBuy),
        gram: gram.toFixed(2),
      };
    });

    const annualReport = {
      month: 'Annual',
      saving: monthlyData.reduce((sum, row) => sum + parseFloat(row.saving), 0).toFixed(0),
      savingTrd: monthlyData.reduce((sum, row) => sum + parseFloat(row.savingTrd), 0).toFixed(0),
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
        <div className='lg:ml-7'>
          <p className='mb-2'>
            <label className='text-l lg:text-2xl'>Modal (MYR)</label>
          </p>
          <p>
            <input
              className='text-l lg:text-2xl mb-4'
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(event) =>
                onChange('initialInvestment', event.target.value)
              }
            />
          </p>
          
          <p className='mb-2'>
            <label className='text-l lg:text-2xl'>QM Buy (MYR)</label>
          </p>
          <p>
            <input
              className='text-l lg:text-2xl mb-4'
              type="number"
              required
              value={userInput.qmBuy}
              onChange={(event) =>
                onChange('qmBuy', event.target.value)
              }
            />
          </p>

          <p className='mb-2'>
            <label className='text-l lg:text-2xl'>Kenaikan Harga Emas</label>
          </p>
          <p>
            <input
              className='text-l lg:text-2xl mb-6'
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
      {/* Monthly Table Result */}
      <section>
        <div className='mx-auto flex flex-col xl:flex-row'>
          <div className='w-full mr-5 xl:w-1/2 h-auto'>
            <div className='flex overflow-x-auto space-x-8'>
              <table className='mx-auto border border-black bg-white'>
                  <thead>
                      <tr>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Month</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Income</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Saving</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Survive</th>
                      </tr>
                  </thead>
                  <tbody>
                      {tableData.map((rowData, index) => (
                      <tr key={index}>
                          <td className='text-center text-m border border-black'>{rowData.month}</td>
                          <td className='text-center pl-1 border border-black'>{currencyformatter.format(rowData.saving)}</td>
                          <td className='text-center pl-1 border border-black'>{currencyformatter.format(rowData.savingTrd)}</td>
                          <td className='text-center pl-1 border border-black'>{currencyformatter.format(rowData.survive)}</td>
                      </tr>
                      ))}
                  </tbody>
              </table>
            </div>
          </div>
          <div className='w-full xl:w-1/2 mt-5 pr-4 xl:mt-0 h-auto'>
            <div className='flex overflow-x-auto space-x-8'>
              <table className='mx-auto border border-black bg-white'>
                  <thead>
                      <tr>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Month</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Saving</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Survive</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Gold Price</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Gram</th>
                      </tr>
                  </thead>
                  <tbody>
                      {tableData.map((rowData, index) => (
                      <tr key={index}>
                          <td className='text-center text-m border border-black'>{rowData.month}</td>
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
        </div>
      </section>
      {/* Monthly Table Result */}
      <section className='mt-5'>
        <div className='mx-auto flex flex-col xl:flex-row'>
          <div className='w-full mr-5 xl:w-1/2 h-auto'>
            <div className='flex overflow-x-auto space-x-8'>
              <table className='mx-auto border border-black bg-white'>
                  <thead>
                      <tr>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Year</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Simpanan</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Dividen</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Total</th>
                      </tr>
                  </thead>
                  <tbody>
                      {tableData.map((rowData, index) => (
                      <tr key={index}>
                          <td className='text-center text-m border border-black'>{rowData.month}</td>
                          <td className='text-center pl-1 border border-black'>{currencyformatter.format(rowData.saving)}</td>
                          <td className='text-center pl-1 border border-black'>{currencyformatter.format(rowData.savingTrd)}</td>
                          <td className='text-center pl-1 border border-black'>{currencyformatter.format(rowData.survive)}</td>
                      </tr>
                      ))}
                  </tbody>
              </table>
            </div>
          </div>
          <div className='w-full xl:w-1/2 mt-5 pr-4 xl:mt-0 h-auto'>
            <div className='flex overflow-x-auto space-x-8'>
              <table className='mx-auto border border-black bg-white'>
                  <thead>
                      <tr>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Month</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Saving</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Survive</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Gold Price</th>
                      <th className='text-center text-l lg:text-xl pl-1 pr-1 border border-black'>Gram</th>
                      </tr>
                  </thead>
                  <tbody>
                      {tableData.map((rowData, index) => (
                      <tr key={index}>
                          <td className='text-center text-m border border-black'>{rowData.month}</td>
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
        </div>
      </section>
    </div>
  );
}
