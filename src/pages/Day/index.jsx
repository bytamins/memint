import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { UserContext } from "../../providers/user";

import EditDay from "../../components/EditDay";
import { DEFAULT_TITLE } from "../../utils/constants";
const Day = () => {
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

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                {moment(timestamp * 1000).format("MM/DD/YYYY")}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {day.title || DEFAULT_TITLE}
              </h6>
              <p className="card-text">{day.description}</p>
              <a href="#link" className="card-link">
                Card link
              </a>
              <a href="#link" className="card-link">
                Another link
              </a>
            </div>
          </div>
          {day && <EditDay tokenId={tokenId} day={day} key={day} />}
        </div>
      </div>
    </div>
  );
};

export default Day;
