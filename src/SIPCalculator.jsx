// src/SIPCalculator.jsx
import React, { useState } from 'react';
import './SIPCalculator.css';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [years, setYears] = useState('');
  const [totalInvestment, setTotalInvestment] = useState('');
  const [maturityAmount, setMaturityAmount] = useState('');
  const [profitGained, setProfitGained] = useState('');

  const calculate = (e) => {
    e.preventDefault();
    const n1 = parseFloat(monthlyInvestment);
    const n2 = parseFloat(annualRate);
    const n3 = parseFloat(years);

    const mroi = n2 / 100;
    const fmroi = mroi / 12;
    const ffmroi = 1 + fmroi;

    const payments = n3 * 12;
    const fpayments = payments;

    const midcal = Math.pow(ffmroi, fpayments);
    const fmidcal = midcal - 1;
    const ffmidcal = fmidcal / fmroi;

    const ans1 = n1 * n3 * 12;
    const ans2 = n1 * ffmidcal * ffmroi;
    const ans3 = ans2 - ans1;

    setTotalInvestment(ans1.toFixed(2));
    setMaturityAmount(ans2.toFixed(2));
    setProfitGained(ans3.toFixed(2));
  };

  const resetAll = () => {
    setMonthlyInvestment('');
    setAnnualRate('');
    setYears('');
    setTotalInvestment('');
    setMaturityAmount('');
    setProfitGained('');
  };

  return (
    <div className="content">
      <section>
        <h1>SIP Calculator</h1>
        <form className="formcontent" onSubmit={calculate}>
          <label htmlFor="investment">Monthly Investment:</label><br />
          <input
            type="number"
            id="money"
            placeholder="0"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            required
          /><br />
          <label htmlFor="roi">Annual Rate (In %):</label><br />
          <input
            type="number"
            id="rate"
            placeholder="0"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            required
          /><br />
          <label htmlFor="year">Year(s):</label><br />
          <input
            type="number"
            id="years"
            placeholder="0"
            className="small"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            required
          /><br />

          <input type="submit" value="CALCULATE" className="btn" />
          <input type="reset" onClick={resetAll} value="RESET" className="btn" />
        </form>

        <div className="summary">
          <h2>Summary :</h2>
          <label htmlFor="TI">Total Investment: ₹</label>
          <input type="number" id="totalinvestment" readOnly value={totalInvestment} placeholder="0" /><br />
          <label htmlFor="MA">Maturity Amount: ₹</label>
          <input type="number" id="maturity" readOnly value={maturityAmount} placeholder="0" /><br />
          <label htmlFor="Profit">Profit Gained: ₹</label>
          <input type="number" id="maxprofit" readOnly value={profitGained} placeholder="0" /><br />
        </div>
      </section>
    </div>
  );
};

export default SIPCalculator;
