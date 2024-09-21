import { useState } from "react";

export default function UserInput( {onChangeData}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input type="number" required id="initial" onChange={ (e) => onChangeData(e.target.id, e)}/>
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input type="number" required id="annual" onChange={ (e) => onChangeData(e.target.id, e)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected">Expected Return</label>
          <input type="number" required id="expected" onChange={ (e) => onChangeData(e.target.id, e)}/>
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" required id="duration" onChange={ (e) => onChangeData(e.target.id, e)}/>
        </p>
      </div>
    </section>
  );
}
