import { useEffect, useState } from "react";
import axios from "axios";
import { NFTPORT_API_KEY } from "../../utils/constants";

const OpenSeaInfo = ({ transaction_hash }) => {
  const [mint, setMint] = useState(null);

  useEffect(() => {
    async function getNFT() {
      const { data } = await axios.request({
        method: "GET",
        url: `https://api.nftport.xyz/v0/mints/${transaction_hash}`,
        params: { chain: "polygon" },
        headers: {
          "Content-Type": "application/json",
          Authorization: NFTPORT_API_KEY,
        },
      });
      setMint(data);
    }
    getNFT();
  }, [transaction_hash]);

  console.log(mint);

  return mint ? (
    <div className="card mb-4">
      <div className="card-body">
        <a
          href={`https://opensea.io/assets/matic/${mint.contract_address}/${mint.token_id}`}
          className="btn btn-primary btn-lg">
          View on OpenSea
        </a>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default OpenSeaInfo;
