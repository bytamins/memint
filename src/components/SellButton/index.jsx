import { useState } from "react";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";

const SellButton = ({ asset }) => {
  const [price, setPrice] = useState("");
  const { tokenAddress, tokenId } = asset;
  const { user } = useMoralis();
  async function sellOrder() {
    try {
      const response = await Moralis.Plugins.opensea.createSellOrder({
        network: "testnet",
        tokenAddress,
        tokenId,
        tokenType: "ERC721",
        userAddress: user.get("ethAddress"),
        startAmount: price,
        endAmount: price,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
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
        <button className="btn btn-success w-100" onClick={sellOrder}>
          Create Sell Order
        </button>
      </div>
    </div>
  );
};

export default SellButton;
