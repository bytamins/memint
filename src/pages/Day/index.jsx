import { useParams } from "react-router-dom";
import moment from "moment";
const Day = () => {
  console.log(useParams());
  const { timestamp } = useParams();
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {moment(timestamp * 1000).format("MM/DD/YYYY")}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day;
