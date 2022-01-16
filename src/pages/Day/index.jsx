import { useParams } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
import {
  useMoralis,
  useMoralisQuery,
  useNewMoralisObject,
} from "react-moralis";

import img_placeholder from "../../assets/img_placeholder.png";

import EditDay from "../../components/EditDay";
import { DAY_LABEL_FORMAT } from "../../utils/constants";
import { TokenPreview, DayMeta, MetaContainer } from "./styled";
import MintArea from "../../components/MintArea";
import MetadataPreview from "../../components/MetadataPreview";
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
    <h1>Loading...</h1>
  ) : (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <TokenPreview className="card mb-4">
            <img
              src={
                day.id
                  ? day.get("image_url") || img_placeholder
                  : img_placeholder
              }
              className="card-img-top"
              alt="..."
            />
            {day.id && (
              <MetaContainer>
                <DayMeta>
                  <h4 className="card-title mb-3">{day.get("title")}</h4>
                  <p className="card-description">{day.get("description")}</p>
                </DayMeta>
              </MetaContainer>
            )}
            {day.id && <MintArea day={day} />}
          </TokenPreview>
        </div>
        <div className="col-md-8">
          {day.id && (
            <div className="row">
              <div className="col-md-12">
                <div className="alert alert-primary" role="alert">
                  <strong>Pro Tip:</strong> You can keep making changes to this
                  day until you mint it!
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
