import { useContext } from "react";
import { useMoralis } from "react-moralis";
import { UserContext } from "../../providers/user";

const MetamaskButton = () => {
  const { refreshUser } = useContext(UserContext);
  const { authenticate, isAuthenticated, logout } = useMoralis();

  async function logOut() {
    await logout();
    await refreshUser();
  }

  return isAuthenticated ? (
    <button onClick={logOut} className="btn btn-warning btn-lg">
      Disconnect MetaMask
    </button>
  ) : (
    <button
      onClick={() =>
        authenticate({
          signingMessage: "Log in using Moralis",
        })
      }
      className="btn btn-warning btn-lg">
      Connect w/ MetaMask
    </button>
  );
};

export default MetamaskButton;
