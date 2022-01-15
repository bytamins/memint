import { useEffect, useState, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import { UserContext } from "../../providers/user";
import img_placeholder from "../../assets/img_placeholder.png";

import EditDay from "../../components/EditDay";
import { DEFAULT_TITLE } from "../../utils/constants";
import { TokenPreview, DayMeta, MetaContainer } from "./styled";
const Day = () => {
  const [editing, setEditing] = useState(false);
  const [day, setDay] = useState({
    title: DEFAULT_TITLE,
  });
  const { account } = useContext(UserContext);
  const { timestamp } = useParams();
  const tokenId = `${account}x${timestamp}`;

  async function getDay() {
    const db = getFirestore();

    const docRef = doc(db, "days", tokenId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDay(docSnap.data());
    }
  }

  useEffect(() => {
    getDay();
  }, []);

  console.log(day);
  if (day.tokenId) {
    console.log("HELLOOOO");
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-primary" role="alert">
            You can make changes to this day until you mint it!
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <TokenPreview className="card">
            <img
              src={day.image_url || img_placeholder}
              className="card-img-top"
              alt="..."
            />
            <MetaContainer>
              <DayMeta>
                <h4>{day.title}</h4>
              </DayMeta>
            </MetaContainer>
          </TokenPreview>
        </div>
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              {moment(timestamp * 1000).format("MMMM Do[,] YYYY")}
            </div>
            {day.tokenId || editing ? (
              <div className="card-body">
                {day && <EditDay tokenId={tokenId} day={day} key={day} />}
              </div>
            ) : (
              <div className="card-body text-center p-5">
                <h4 className="card-title">No details yet!</h4>
                <p className="card-text">
                  Add some more information about this day to make your NFT
                  extra special.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setEditing(true)}>
                  Add Details
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day;
