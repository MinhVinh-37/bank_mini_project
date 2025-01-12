import InputForm from "./InputForm.jsx";
import { createAccountAPI } from "../apis/accounts.js";
import { useNavigate } from "react-router";

export default function RegisterForm({ loginCurrentAccount }) {
  const navigate = useNavigate();

  async function handleAction(formData) {
    const data = await createAccountAPI(
      formData.get("Username"),
      formData.get("Currency"),
      formData.get("Description"),
      formData.get("Current Balance")
    );
    if (data.error) {
      alert(data.error);
      return;
    }

    loginCurrentAccount(data);
    navigate("/dashboard");
  }

  return (
    <form action={handleAction}>
      <InputForm title="Username" />
      <InputForm title="Currency" defaultValue="$" />
      <InputForm title="Description" />
      <InputForm title="Current Balance" defaultValue="0" type="number" />
      <button>Registration</button>
    </form>
  );
}
