import PageTitle from "../../components/PageTitle";
import { useMoralisQuery } from "react-moralis";
import { useParams } from "react-router-dom";
import ReactJson from "react-json-view";
import OpenSeaInfo from "../../components/OpenSeaInfo";

const MintedDay = () => {
  const { objectId } = useParams();

  const { data, isLoading } = useMoralisQuery("Day", (query) =>
    query.equalTo("objectId", objectId).limit(1)
  );

  const record = data[0];

  return isLoading || !record ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container mt-5">
      <PageTitle
        title={record.get("title")}
        description={record.get("description")}
      />
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <img src={record.get("image_url")} className="w-100" alt="..." />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <OpenSeaInfo
            transaction_hash={record.get("mint_response").transaction_hash}
          />

          {/* <ReactJson src={record.get("mint_response")} /> */}
        </div>
      </div>
    </div>
  );
};

export default MintedDay;
