import { useEffect, useState } from "react";
import axios from "axios";
import Moralis from "moralis";
import { CHAIN, NFTPORT_API_KEY } from "../../utils/constants";
import SellButton from "../SellButton";
import CancelOrderButton from "../CancelOrder";
import LoadingIcon from "../LoadingIcon";
import moment from "moment";

const OpenSeaInfo = ({ transaction_hash }) => {
  const [loading, setLoading] = useState(true);
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    async function getNFT() {
      const { data } = await axios.request({
        method: "GET",
        url: `https://api.nftport.xyz/v0/mints/${transaction_hash}`,
        params: { chain: CHAIN },
        headers: {
          "Content-Type": "application/json",
          Authorization: NFTPORT_API_KEY,
        },
      });
      if (data.response === "OK") {
        const response = await Moralis.Plugins.opensea.getAsset({
          network: "testnet",
          tokenAddress: data.contract_address,
          tokenId: data.token_id,
        });
        setAsset(response);
      }

      setLoading(false);
    }
    getNFT();
  }, [transaction_hash]);

  console.log(asset);

  if (loading) return <LoadingIcon />;

  return asset ? (
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              {moment(
                asset.traits.find((trait) => trait.trait_type === "memint")
                  .value * 1000
              ).format("MMMM Do[,] YYYY")}
            </h4>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">View on OpenSea</h4>
            <p className="card-text">
              Check out your NFT on the OpenSea marketplace!
            </p>
            <a
              href={asset.openseaLink}
              target="_blank"
              className="btn btn-primary w-100"
              rel="noreferrer">
              Visit Page
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        {asset.sellOrders.length === 0 ? (
          <SellButton asset={asset} />
        ) : (
          <CancelOrderButton asset={asset} />
        )}
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="col-md-12 text-center">
        <LoadingIcon />
        <h4 className="mt-4">Nice job!</h4>
        <p className="mb-0">
          Your transaction is still pending, but details should show up here
          shortly...
        </p>
      </div>
    </div>
  );
};

export default OpenSeaInfo;
