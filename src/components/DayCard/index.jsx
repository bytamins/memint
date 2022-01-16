import moment from "moment";
import rinkeby from "../../assets/rinkeby.png";
import polygon from "../../assets/polygon.png";
import { DEFAULT_TITLE } from "../../utils/constants";
import img_placeholder from "../../assets/img_placeholder.png";

import { Card, StyledLink } from "./styled";

const DayCard = ({ dayLabel, dayRecord, col, resetBorder }) => {
  if (moment(dayLabel).unix() > moment().unix()) return null;
  let path = `/day/${moment(dayLabel).unix()}`;
  let borderClass = "";
  if (dayRecord.id && dayRecord.get("minted")) {
    path = `/minted/${dayRecord.id}`;
    // borderClass = "border-success";
  } else if (dayRecord.id) {
    borderClass = "border-primary";
  }
  if (resetBorder) {
    borderClass = "";
  }
  return dayRecord.id ? (
    <div className={col}>
      <StyledLink to={path}>
        <Card className={`card ${borderClass} mb-4`}>
          <div className="row g-0 d-flex align-items-center">
            <div className="col-md-3">
              <img
                src={dayRecord.get("image_url") || img_placeholder}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className={dayRecord.get("minted") ? "col-md-7" : "col-md-9"}>
              <div className="card-body pb-0 pt-0">
                <h5 className="card-title mb-0">{dayLabel}</h5>
                <p className="card-text mb-0">{dayRecord.get("title")}</p>
              </div>
            </div>
            {dayRecord.get("minted") && (
              <div className="col-md-2">
                {dayRecord.get("mint_response").chain === "polygon" ? (
                  <img src={polygon} alt="Polygon" width="22" />
                ) : (
                  <img src={rinkeby} alt="Rinkeby" width="22" />
                )}
              </div>
            )}
          </div>
        </Card>
      </StyledLink>
    </div>
  ) : (
    <div className={col}>
      <StyledLink to={path}>
        <Card className="card mb-4">
          <div className="row g-0  d-flex align-items-center">
            <div className="col-md-3">
              <img src={img_placeholder} className="card-img-top" alt="..." />
            </div>
            <div className="col-md-9">
              <div className="card-body pb-0 pt-0">
                <h5 className="card-title mb-0">{dayLabel}</h5>
                {/* <p className="card-text">{""}</p> */}
              </div>
            </div>
          </div>
        </Card>
      </StyledLink>
    </div>
  );
};

DayCard.defaultProps = {
  dayRecord: {
    title: DEFAULT_TITLE,
  },
  col: "col-md-3",
};

export default DayCard;
