import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";

export default function LoginPage({ loginCurrentAccount }) {
  return (
    <div className="login-page">
      <h1>AgriTBTechVietSacomVI Bank</h1>
      <LoginForm loginCurrentAccount={loginCurrentAccount} />
      <div className="divider">OR</div>
      <RegisterForm loginCurrentAccount={loginCurrentAccount} />
    </div>
  );
}
