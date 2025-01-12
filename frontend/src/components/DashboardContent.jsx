export default function DashboardContent({ transaction }) {
  return (
    <tbody>
      <tr>
        <td>{transaction.date}</td>
        <td>{transaction.object}</td>
        <td>{transaction.amount}</td>
      </tr>
    </tbody>
  );
}
