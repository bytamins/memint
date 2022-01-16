import { useParams } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
import {
  useMoralis,
  useMoralisQuery,
  useNewMoralisObject,
} from "react-moralis";

import EditDay from "../../components/EditDay";
import { DAY_LABEL_FORMAT } from "../../utils/constants";

import MetadataPreview from "../../components/MetadataPreview";
import LoadingIcon from "../../components/LoadingIcon";
import AssetCard from "../../components/AssetCard";
const Day = () => {
  const { user } = useMoralis();
  const { timestamp } = useParams();
  const tokenId = `${user.get("ethAddress")}x${timestamp}`;

  const { isSaving, save } = useNewMoralisObject("Day");

  // update days object
  async function createDay() {
    try {
      const response = save({
        user,
        tokenId,
        timestamp,
        dayLabel: moment(timestamp * 1000).format(DAY_LABEL_FORMAT),
      });
      console.log(response);
      toast.success("Your day is ready to be edited!");
    } catch (err) {
      toast.error(err.message);
    }
  }

  const { data, isLoading } = useMoralisQuery(
    "Day",
    (query) => query.equalTo("user", user).equalTo("tokenId", tokenId).limit(1),
    [1],
    {
      live: true,
    }
  );

  let day = data[0] || {};
  console.log(day);

  return isLoading ? (
    <LoadingIcon />
  ) : (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <AssetCard day={day} />
        </div>
        <div className="col-md-8">
          {day.id && (
            <div className="row">
              <div className="col-md-12">
                <div className="alert alert-primary" role="alert">
                  <strong>Pro Tip:</strong> You can keep making changes until
                  you mint this day!
                </div>
              </div>
            </div>
          )}
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">
                {moment(timestamp * 1000).format("MMMM Do[,] YYYY")}
              </h4>
            </div>
            {day.id ? (
              <div className="card-body">
                {day && (
                  <EditDay
                    tokenId={tokenId}
                    day={day}
                    key={day}
                    timestamp={timestamp}
                  />
                )}
              </div>
            ) : (
              <div className="card-body text-center p-5">
                <h4 className="card-title">No details yet!</h4>
                <p className="card-text">
                  Add some more information about this day to make your NFT
                  extra special.
                </p>
                <button
                  className={`btn btn-primary btn-lg ${isSaving && "disabled"}`}
                  onClick={createDay}>
                  {isSaving ? "Loading..." : "Add Details"}
                </button>
              </div>
            )}
          </div>
          {day.id && <MetadataPreview day={day} />}
        </div>
      </div>
    </div>
  );
};

export default Day;
