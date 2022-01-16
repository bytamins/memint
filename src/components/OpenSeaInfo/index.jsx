import { useEffect, useState } from "react";
import axios from "axios";
import * as Web3 from "web3";
import Moralis from "moralis/dist/moralis.min.js";
import { OpenSeaPort, Network } from "opensea-js";
import { CHAIN, NFTPORT_API_KEY } from "../../utils/constants";

const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io");

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Rinkeby,
  // apiKey: YOUR_API_KEY,
});

const OpenSeaInfo = ({ transaction_hash }) => {
  const [loading, setLoading] = useState(true);
  const [mint, setMint] = useState(null);

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
        setMint(data);
      }

      setLoading(false);
    }
    getNFT();
  }, [transaction_hash]);

  console.log(mint);

  return !loading ? (
    <div className="card mb-4">
      {mint ? (
        <div className="card-body">
          <a
            href={`https://testnets.opensea.io/assets/${mint.contract_address}/${mint.token_id}`}
            target="_blank"
            className="btn btn-primary btn-lg"
            rel="noreferrer">
            View on OpenSea
          </a>
        </div>
      ) : (
        <p>
          Your transaction is still pending. Your details will show up here
          shortly!
        </p>
      )}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default OpenSeaInfo;
