import InputForm from "./InputForm.jsx";

export default function AddTransactionForm({ closeForm, addTransaction }) {
  async function handleAction(formData) {
    await addTransaction(
      formData.get("Date"),
      formData.get("Object"),
      formData.get("Amount")
    );
    closeForm();
  }
  return (
    <form action={handleAction}>
      <InputForm title="Date" />
      <InputForm title="Object" />
      <InputForm title="Amount" />
      <button>Add</button>
    </form>
  );
}
