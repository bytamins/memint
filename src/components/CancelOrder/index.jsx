import Moralis from "moralis";
import { useMoralis } from "react-moralis";

const CancelOrderButton = ({ asset }) => {
  // const { tokenAddress, tokenId } = asset;
  const { user } = useMoralis();
  async function cancelOrder() {
    try {
      await Moralis.Plugins.opensea.cancelOrder({
        network: "testnet",
        userAddress: user.get("ethAddress"),
        order: asset.sellOrders[0],
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button className="btn btn-secondary btn-lg" onClick={cancelOrder}>
      Cancel Sell Order
    </button>
  );
};

export default CancelOrderButton;
