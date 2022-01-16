import Moralis from "moralis";
import { useMoralis } from "react-moralis";

const CancelOrderButton = ({ asset }) => {
  // const { tokenAddress, tokenId } = asset;
  const { user } = useMoralis();
  console.log(asset);
  async function cancelOrder() {
    try {
      const response = await Moralis.Plugins.opensea.cancelOrder({
        network: "testnet",
        userAddress: user.get("ethAddress"),
        order: asset.sellOrders[0],
      });

      console.log(response);
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
