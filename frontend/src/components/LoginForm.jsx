import { getAccountAPI } from "../apis/accounts.js";
import InputForm from "./InputForm.jsx";
import { useNavigate } from "react-router";

export default function LoginForm({ loginCurrentAccount }) {
  const navigate = useNavigate();

  async function handleAction(formData) {
    const username = formData.get("Username");
    const data = await getAccountAPI(username);
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
      <button>Login</button>
    </form>
  );
}
