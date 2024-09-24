export default function UserInput({ onChangeData, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            required
            id="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(e) => onChangeData(e.target.id, e)}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            required
            id="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(e) => onChangeData(e.target.id, e)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            required
            id="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(e) => onChangeData(e.target.id, e)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            required
            id="duration"
            value={userInput.duration}
            onChange={(e) => onChangeData(e.target.id, e)}
          />
        </p>
      </div>
    </section>
  );
}
