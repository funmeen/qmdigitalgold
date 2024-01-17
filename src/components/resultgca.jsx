import { calculateInvestmentResults } from "../utils/investment";

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);

    console.log(resultsData);

    

    return <table id="result">
        <thead>
            <tr>
                <th>Month</th>
                <th>Saving</th>
                <th>Survive</th>
                <th>Gold Price</th>
                <th>Gram</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
}