import { useNavigate } from "react-router";

export default function Logout({ logoutCurrentAccount }) {
  const navigate = useNavigate();

  function handleOnClick() {
    logoutCurrentAccount();
    navigate("/login");
  }

  return (
    <div>
      <button onClick={handleOnClick}>Logout</button>
    </div>
  );
}
