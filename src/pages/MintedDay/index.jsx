import { useMoralisQuery } from "react-moralis";
import { useParams } from "react-router-dom";
import OpenSeaInfo from "../../components/OpenSeaInfo";
import LoadingIcon from "../../components/LoadingIcon";
import AssetCard from "../../components/AssetCard";
import moment from "moment";

const MintedDay = () => {
  const { objectId } = useParams();

  const { data, isLoading } = useMoralisQuery("Day", (query) =>
    query.equalTo("objectId", objectId).limit(1)
  );

  const record = data[0];

  console.log(record);

  return isLoading || !record ? (
    <LoadingIcon />
  ) : (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-md-3">
          <AssetCard day={record} />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mt-2">
                    {moment(record.get("dayLabel")).format("MMMM Do[,] YYYY")}
                  </h4>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <strong>Coming Soon:</strong> More information about your
                    NFT.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <OpenSeaInfo
                transaction_hash={record.get("mint_response").transaction_hash}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintedDay;
