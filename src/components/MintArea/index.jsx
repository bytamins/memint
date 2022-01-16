import { useNavigate } from "react-router-dom";

import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import { useMoralis } from "react-moralis";
import { NFTPORT_API_KEY, YEAR_FORMAT } from "../../utils/constants";

const method = "POST";
const headers = {
  "Content-Type": "application/json",
  Authorization: NFTPORT_API_KEY,
};

const MintArea = ({ day }) => {
  let navigate = useNavigate();

  const { user } = useMoralis();

  const dayLabel = day.get("dayLabel");

  async function mint() {
    console.log([
      { trait_type: "Year", value: moment(dayLabel).format(YEAR_FORMAT) },
      { trait_type: "Month", value: moment(dayLabel).format("MMMM") },
      { trait_type: "Day", value: moment(dayLabel).format("DD") },
      { trait_type: "Week Day", value: moment(dayLabel).format("dddd") },
    ]);
    try {
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
          ],
        },
      });
      console.log(data);
      const { metadata_uri } = data;
      console.log(metadata_uri);
      const response = await axios.request({
        method,
        url: "https://api.nftport.xyz/v0/mints/customizable",
        headers,
        data: {
          chain: "polygon",
          contract_address: "0x1189B301458ab7b6bA4a367a0a460aaE01fFf2a7",
          metadata_uri,
          mint_to_address: user.get("ethAddress"),
        },
      });
      console.log(response);
      console.log(response.data);
      day.set("minted", true);
      day.set("mint_response", response.data);
      day.save();
      toast.success("You minted an NFT!");
      navigate(`/minted/${day.id}`);
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Mint Your NFT</h4>
        <button onClick={mint}>Mint</button>
      </div>
    </div>
  );
};

export default MintArea;
