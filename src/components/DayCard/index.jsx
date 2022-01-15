import { Link } from "react-router-dom";
import moment from "moment";
import { DEFAULT_TITLE } from "../../utils/constants";

const DayCard = ({ dayLabel, dayRecord }) => {
  return (
    <div className="col-md-4">
      <div className={`card ${dayRecord.tokenId && `border-primary`} mb-4`}>
        {dayRecord.image_url && (
          <img src={dayRecord.image_url} className="card-img-top" alt="..." />
        )}
        <div className="card-body">
          <h5 className="card-title">{dayLabel}</h5>
          <p className="card-text text-muted">{dayRecord.title}</p>
          <div className="row">
            <div className="col-md-6">
              <Link
                to={`/day/${moment(dayLabel).unix()}`}
                className="btn btn-primary w-100">
                Edit
              </Link>
            </div>
            <div className="col-md-6">
              <button className="btn btn-success w-100">Mint</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DayCard.defaultProps = {
  dayRecord: {
    title: DEFAULT_TITLE,
  },
};

export default DayCard;
