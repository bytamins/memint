import { useMoralisQuery } from "react-moralis";
import { useParams } from "react-router-dom";
import OpenSeaInfo from "../../components/OpenSeaInfo";
import LoadingIcon from "../../components/LoadingIcon";
import AssetCard from "../../components/AssetCard";

const MintedDay = () => {
  const { objectId } = useParams();

  const { data, isLoading } = useMoralisQuery("Day", (query) =>
    query.equalTo("objectId", objectId).limit(1)
  );

  const record = data[0];

  return isLoading || !record ? (
    <LoadingIcon />
  ) : (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-md-3">
          <AssetCard day={record} />
        </div>
        <div className="col-md-9">
          <OpenSeaInfo
            transaction_hash={record.get("mint_response").transaction_hash}
          />
        </div>
      </div>
    </div>
  );
};

export default MintedDay;
