import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ userInput }) {
  var annualData = [];
  var totalInterest = 0;

  if (
    userInput.annualInvestment !== 0 &&
    userInput.duration !== 0 &&
    userInput.expectedReturn !== 0 &&
    userInput.initialInvestment !== 0
  ) {
    annualData = calculateInvestmentResults(userInput);
  }

  var investedCapitol = userInput.initialInvestment;

  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((yearData) => {
            totalInterest += yearData.interest;
            investedCapitol += userInput.annualInvestment;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapitol)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
