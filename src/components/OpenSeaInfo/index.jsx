import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Moralis from "moralis";
import { NFTPORT_API_KEY } from "../../utils/constants";
import SellButton from "../SellButton";
import CancelOrderButton from "../CancelOrder";
import LoadingIcon from "../LoadingIcon";
import { NetworkContext } from "../../utils/networkProvider";

const OpenSeaInfo = ({ transaction_hash }) => {
  const { network } = useContext(NetworkContext);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessaage] = useState("");
  const [asset, setAsset] = useState(null);

  async function getNFT() {
    setErrorMessaage("");
    setLoading(true);
    const { data } = await axios.request({
      method: "GET",
      url: `https://api.nftport.xyz/v0/mints/${transaction_hash}`,
      params: { chain: network },
      headers: {
        "Content-Type": "application/json",
        Authorization: NFTPORT_API_KEY,
      },
    });
    console.log(data);
    if (data.response === "OK") {
      if (network === "rinkeby") {
        const response = await Moralis.Plugins.opensea.getAsset({
          network: "testnet",
          tokenAddress: data.contract_address,
          tokenId: data.token_id,
        });
        console.log(response);
        setAsset(response);
      } else {
        setAsset({
          network,
          openseaLink: `https://opensea.io/assets/matic/${data.contract_address}/${data.token_id}`,
          sellOrders: [],
        });
      }
    } else {
      setErrorMessaage(data.error);
    }

    setLoading(false);
  }

  useEffect(() => {
    getNFT();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transaction_hash, network]);

  if (loading) return <LoadingIcon />;
  if (errorMessage)
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h4 className="mt-4">Uh oh!</h4>
          <p
            className="mb-0"
            style={{
              wordBreak: "break-all",
            }}>
            {errorMessage}
          </p>
        </div>
      </div>
    );

  return asset ? (
    <>
      <div className="card mb-4">
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
      {network === "rinkeby" ? (
        <>
          {asset.sellOrders.length === 0 ? (
            <SellButton asset={asset} getNFT={getNFT} />
          ) : (
            <CancelOrderButton asset={asset} getNFT={getNFT} />
          )}
        </>
      ) : (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">API Not Support</h4>
            <p className="card-text">
              Sell order API calls aren't currently supported on the Polygon
              network, but you can still create a sell order on Opensea!
            </p>
          </div>
        </div>
      )}
    </>
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
