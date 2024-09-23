import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ userData }) {


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
        </tbody>
      </table>
    </section>
  );
}
