import { useState } from "react";
import AddTransactionForm from "./AddTransactionForm";

export default function AddTransaction({ addTransaction }) {
  const [showForm, setShowForm] = useState(false);

  function displayForm() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
  }

  return (
    <div>
      <button onClick={displayForm}>Add Transaction</button>
      {showForm && (
        <>
          <br />
          <AddTransactionForm
            closeForm={closeForm}
            addTransaction={addTransaction}
          />
        </>
      )}
    </div>
  );
}
