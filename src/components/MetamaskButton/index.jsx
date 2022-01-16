import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";

const MetamaskButton = () => {
  let navigate = useNavigate();

  const { authenticate, isAuthenticated, logout } = useMoralis();

  async function logIn() {
    await authenticate({
      signingMessage: "Log in using Moralis",
    });
    navigate("/dashboard");
  }

  async function logOut() {
    await logout();
    navigate("/");
  }

  return isAuthenticated ? (
    <button onClick={logOut} className="btn btn-warning btn-lg">
      Disconnect MetaMask
    </button>
  ) : (
    <button onClick={logIn} className="btn btn-warning btn-lg">
      Connect w/ MetaMask
    </button>
  );
};

export default MetamaskButton;
