import moment from "moment";
import { DEFAULT_TITLE } from "../../utils/constants";
import img_placeholder from "../../assets/img_placeholder.png";

import { Card, StyledLink } from "./styled";

const DayCard = ({ dayLabel, dayRecord, col, resetBorder }) => {
  if (moment(dayLabel).unix() > moment().unix()) return null;
  let path = `/day/${moment(dayLabel).unix()}`;
  let borderClass = "";
  if (dayRecord.id && dayRecord.get("minted")) {
    path = `/minted/${dayRecord.id}`;
    borderClass = "border-success";
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
          <div class="row g-0 d-flex align-items-center">
            <div class="col-md-3">
              <img
                src={dayRecord.get("image_url") || img_placeholder}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div class="col-md-9">
              <div class="card-body pb-0 pt-0">
                <h5 class="card-title">{dayLabel}</h5>
                <p class="card-text mb-0">{dayRecord.get("title")}</p>
                {/* <p class="card-text">
                  <small class="text-muted">{dayLabel}</small>
                </p> */}
              </div>
            </div>
          </div>
        </Card>
      </StyledLink>
    </div>
  ) : (
    <div className={col}>
      <StyledLink to={path}>
        <Card className="card mb-4">
          <div class="row g-0  d-flex align-items-center">
            <div class="col-md-3">
              <img src={img_placeholder} className="card-img-top" alt="..." />
            </div>
            <div class="col-md-9">
              <div class="card-body pb-0 pt-0">
                <h5 class="card-title mt-2">{dayLabel}</h5>
                <p class="card-text">{""}</p>
                {/* <p class="card-text">
                  <small class="text-muted">{dayLabel}</small>
                </p> */}
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
