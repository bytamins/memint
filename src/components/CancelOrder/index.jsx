import { useState } from "react";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";

const CancelOrderButton = ({ asset, getNFT }) => {
  const { user } = useMoralis();
  const [canceling, setCanceling] = useState(false);
  async function cancelOrder() {
    try {
      setCanceling(true);
      await Moralis.Plugins.opensea.cancelOrder({
        network: "testnet",
        userAddress: user.get("ethAddress"),
        order: asset.sellOrders[0],
      });
      toast.success("You've canceled your sell order!");
      setCanceling(false);
      getNFT();
    } catch (err) {
      toast.error(err.message);
      setCanceling(false);
    }
  }
  console.log(asset.sellOrders[0]);
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Cancel Sell Order</h4>
        <p className="card-text">
          You can cancel the sell order you've placed on OpenSea.
        </p>
        <button
          className="btn btn-secondary w-100"
          onClick={cancelOrder}
          disabled={canceling}>
          {canceling ? `Canceling Order...` : `Cancel Sell Order`}
        </button>
      </div>
    </div>
  );
};

export default CancelOrderButton;
