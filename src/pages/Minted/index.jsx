import axios from "axios";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { NFTPORT_API_KEY } from "../../utils/constants";

const Minted = () => {
  const { user } = useMoralis();

  useEffect(() => {
    async function getMinted() {
      const { data } = await axios.request({
        method: "GET",
        url: `https://api.nftport.xyz/v0/accounts/${user.get("ethAddress")}`,
        params: { chain: "polygon" },
        headers: {
          "Content-Type": "application/json",
          Authorization: NFTPORT_API_KEY,
        },
      });
      console.log(data.nfts);
    }
    getMinted();
  }, [user]);
  return <h1>Minted</h1>;
};

export default Minted;
