import { useContext } from "react";
import { UserContext } from "../../providers/user";
const MetamaskButton = () => {
  const { account, setAccount } = useContext(UserContext);

  const connectWallet = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metmask!");
    }
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account!", accounts[0]);
      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };
  return account ? (
    <button className="btn btn-warning btn-lg disabled">
      Metamask Connected!
    </button>
  ) : (
    <button onClick={connectWallet} className="btn btn-warning btn-lg">
      Connect w/ Metamask
    </button>
  );
};

export default MetamaskButton;
