import DashboardTable from "../components/DashboardTable";
import Logout from "../components/Logout";
import { useNavigate } from "react-router";
import { addTransactionAPI, getAccountAPI } from "../apis/accounts";
import AddTransaction from "../components/AddTransaction";

export default function DashboardPage({
  account,
  logoutCurrentAccount,
  updateLatestAccount,
}) {
  const navigate = useNavigate();
  if (!account) {
    navigate("/login");
    return;
  }

  const transactions = account.transactions;
  async function addTransaction(date, object, amount) {
    const username = account.user;

    const transactionData = await addTransactionAPI(
      username,
      date,
      object,
      amount
    );
    if (transactionData.error) {
      alert("Adding transaction error", data.error);
      return;
    }

    const accountData = await getAccountAPI(username);
    if (accountData.error) {
      alert(data.error);
      return;
    }
    updateLatestAccount(accountData);
  }

  return (
    <>
      <h1>AgriTBTechVietSacomVI Bank</h1>
      <Logout logoutCurrentAccount={logoutCurrentAccount} />
      <AddTransaction addTransaction={addTransaction} />
      <DashboardTable transactions={transactions} />
    </>
  );
}
