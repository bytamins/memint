import Moralis from "moralis";
import { useMoralis } from "react-moralis";

const SellButton = ({ asset }) => {
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
        startAmount: 1,
        endAmount: 1,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button className="btn btn-success btn-lg" onClick={sellOrder}>
      Sell NFT
    </button>
  );
};

export default SellButton;
