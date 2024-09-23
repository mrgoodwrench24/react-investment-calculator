import { useState } from "react";

export default function UserInput( {onChangeData}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input type="number" required id="initialInvestment" onChange={ (e) => onChangeData(e.target.id, e)}/>
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input type="number" required id="annualInvestment" onChange={ (e) => onChangeData(e.target.id, e)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input type="number" required id="expectedReturn" onChange={ (e) => onChangeData(e.target.id, e)}/>
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" required id="duration" onChange={ (e) => onChangeData(e.target.id, e)}/>
        </p>
      </div>
    </section>
  );
}
