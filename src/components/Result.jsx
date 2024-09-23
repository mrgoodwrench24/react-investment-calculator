import { formatter } from "../util/investment";

export default function Result({ annualReport, initialInvestment, annualInvestment }) {
  var totalInterest = 0;
  var investedCapitol = initialInvestment;


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
          {annualReport.map((yearData, index) => {
            totalInterest += yearData.interest;
            investedCapitol += annualInvestment;
            return (
              <tr key={yearData + index}>
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
