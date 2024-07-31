

const App = () => {
  return (
    <div className="currency-converter">
      <h2 className="converter-title">Currency Converter</h2>
      <form className="converter-form">
        <div className="form-group">
          <label className="form-label">Enter Amount</label>
          <input type="number" className="form-input" required />
          </div>

          <div className="form-group">
            <div className="form-section">
            <label className="form-label">From</label>
            <div className="currency-select">
              <img src="https://flagsapi.com/US/flat/64.png" alt="Flag"/>
              <select className="currency-dropdown">
                <option value="USD" selected>USD</option>
                <option value="INR">INR</option>
                <option value="NPR">NPR</option>
              </select>
            </div>
          </div>

          <div className="swap-icon">
            <svg  
          </div>

          <div className="form-section">
            <label className="form-label">From</label>
            <div className="currency-select">
              <img src="https://flagsapi.com/IN/flat/64.png" alt="Flag"/>
              <select className="currency-dropdown">
                <option value="USD">USD</option>
                <option value="INR" selected>INR</option>
                <option value="NPR">NPR</option>
              </select>
            </div>
          </div>
          </div>
      </form>
    </div>
  )
}

export default App