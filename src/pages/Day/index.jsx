import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { UserContext } from "../../providers/user";

import EditDay from "../../components/EditDay";
import { DEFAULT_TITLE } from "../../utils/constants";
const Day = () => {
  const [editing, setEditing] = useState(false);
  const [day, setDay] = useState({});
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
        <div className="col-md-4">
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              {moment(timestamp * 1000).format("MMMM Do[,] YYYY")}
            </div>
            {day.tokenId ? (
              <div className="card-body">
                <h5 className="card-title">
                  {moment(timestamp * 1000).format("MM/DD/YYYY")}
                </h5>
                <h4 className="card-subtitle mb-2 text-muted">
                  {day.title || DEFAULT_TITLE}
                </h4>
                <p className="card-text">{day.description}</p>
                <a href="#link" className="card-link">
                  Card link
                </a>
                <a href="#link" className="card-link">
                  Another link
                </a>
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
          {day && <EditDay tokenId={tokenId} day={day} key={day} />}
        </div>
      </div>
    </div>
  );
};

export default Day;
