export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className='ml-7'>
        <p className='mb-2'>
          <label>Initial Investment</label>
          <input
            className='ml-2'
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange('initialInvestment', event.target.value)
            }
          />
        </p>
        <p className='mb-2'>
          <label>Tarikh beli</label>
          <input
            className='ml-2'
            type="date"
            required
            value={userInput.buydate}
            onChange={(event) =>
              onChange('buydate', event.target.value)
            }
          />
        </p>
        <p className='mb-2'>
          <label>Tarikh harini</label>
          <input
            className='ml-2'
            type="date"
            required
            value={userInput.todaydate.toISOString().split('T')[0]} // Format the date as YYYY-MM-DD
            onChange={(event) =>
              onChange('todaydate', new Date(event.target.value))
            }
          />
        </p>
        <p className='mb-2'>
          <label>Jumlah hari</label>
          <input
            className='ml-2'
            type="text" // or "number"
            readOnly
            value={userInput.totalday}
          />
        </p>
        <p className='mb-2'>
          <label>Net Cash Out</label>
          <input
            className='ml-2'
            type="number"
            required
            value={userInput.netCashOut}
            onChange={(event) =>
              onChange('netCashOut', event.target.value)
            }
          />
        </p>
        <p className='mb-2'>
          <label>Fx Rate</label>
          <input
            className='ml-2'
            type="number"
            required
            value={userInput.fxRate}
            onChange={(event) =>
              onChange('fxRate', event.target.value)
            }
          />
        </p>
        <p className='mb-2'>
          <label>Management Fee Refund</label>
          <input
            className='ml-2'
            type="number"
            required
            value={userInput.managementFeeRefund}
            onChange={(event) =>
              onChange('managementFeeRefund', event.target.value)
            }
          />
        </p>
        <p className='mb-2'>
          <label>Conver profit in RM</label>
          <input
            className='ml-2'
            type="number"
            required
            value={userInput.convertToRM}
            onChange={(event) =>
              onChange('convertToRM', event.target.value)
            }
          />
        </p>
        <p className='mb-2'>
          <label>Untung bersih</label>
          <input
            className='ml-2'
            type="number"
            required
            value={userInput.netProfit}
            onChange={(event) =>
              onChange('netProfit', event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
