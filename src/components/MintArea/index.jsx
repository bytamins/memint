import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import { useMoralis } from "react-moralis";
import { NFTPORT_API_KEY, YEAR_FORMAT } from "../../utils/constants";
import { ButtonContainer } from "./styled";
import { NetworkContext } from "../../utils/networkProvider";

const method = "POST";
const headers = {
  "Content-Type": "application/json",
  Authorization: NFTPORT_API_KEY,
};

const MintArea = ({ day }) => {
  const { network, contractAddress } = useContext(NetworkContext);
  let navigate = useNavigate();

  const { user } = useMoralis();
  const [progress, setProgress] = useState(10);
  const [minting, setMinting] = useState(false);

  useEffect(() => {
    let newProgress = progress;
    if (day.get("title")) {
      newProgress += 30;
    }
    if (day.get("description")) {
      newProgress += 30;
    }
    if (day.get("image_url")) {
      newProgress += 30;
    }

    setProgress(newProgress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day]);

  const dayLabel = day.get("dayLabel");

  async function mint() {
    try {
      setMinting(true);
      const { data } = await axios.request({
        method,
        url: "https://api.nftport.xyz/v0/metadata",
        headers,
        data: {
          name: day.get("title"),
          description: day.get("description"),
          file_url: day.get("image_url"),
          attributes: [
            { trait_type: "Year", value: moment(dayLabel).format(YEAR_FORMAT) },
            { trait_type: "Month", value: moment(dayLabel).format("MMMM") },
            { trait_type: "Day", value: moment(dayLabel).format("DD") },
            { trait_type: "Week Day", value: moment(dayLabel).format("dddd") },
            {
              display_type: "date",
              trait_type: "memint",
              value: moment(dayLabel).unix(),
            },
          ],
        },
      });
      const { metadata_uri } = data;
      const response = await axios.request({
        method,
        url: "https://api.nftport.xyz/v0/mints/customizable",
        headers,
        data: {
          chain: network,
          contract_address: contractAddress,
          metadata_uri,
          mint_to_address: user.get("ethAddress"),
        },
      });
      day.set("minted", true);
      day.set("mint_response", response.data);
      day.save();
      toast.success("You minted an NFT!");
      setMinting(false);
      navigate(`/minted/${day.id}`);
    } catch (err) {
      setMinting(false);
      toast.error(err.message);
    }
  }

  return (
    <ButtonContainer>
      <button
        onClick={mint}
        disabled={minting}
        className={`btn btn-success btn-lg w-100 ${
          progress < 100 && "disabled"
        }`}>
        {minting ? "Minting..." : "Mint NFT"}
      </button>
      <div className="progress mt-4">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-success"
          role="progressbar"
          style={{
            width: `${progress}%`,
          }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
    </ButtonContainer>
  );
};

export default MintArea;
