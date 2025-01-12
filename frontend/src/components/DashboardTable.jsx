import DashboardContent from "../components/DashboardContent";

export default function DashboardTable({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      {transactions.map((transaction) => (
        <DashboardContent key={transaction.id} transaction={transaction} />
      ))}
    </table>
  );
}
