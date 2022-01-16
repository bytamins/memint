import { useState } from "react";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";

const SellButton = ({ asset, getNFT }) => {
  const [price, setPrice] = useState("");
  const { tokenAddress, tokenId } = asset;
  const [selling, setSelling] = useState(false);
  const { user } = useMoralis();
  async function sellOrder() {
    try {
      setSelling(true);
      await Moralis.Plugins.opensea.createSellOrder({
        network: "testnet",
        tokenAddress,
        tokenId,
        tokenType: "ERC721",
        userAddress: user.get("ethAddress"),
        startAmount: price,
        endAmount: price,
      });
      toast.success("You've placed a sell order!");
      getNFT();
      setSelling(false);
    } catch (err) {
      toast.error(err.message);
      setSelling(false);
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Sell on OpenSea</h4>
        <p className="card-text">
          List your NFT for sale on the OpenSea marketplace!
        </p>
        <label className="form-label">NFT Price</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control text-right"
            placeholder="0.02"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
            style={{
              textAlign: "right",
            }}
          />
          <span className="input-group-text">ETH</span>
        </div>
        <button
          className="btn btn-success w-100"
          onClick={sellOrder}
          disabled={selling}>
          {selling ? `Creating Order...` : `Create Sell Order`}
        </button>
      </div>
    </div>
  );
};

export default SellButton;
