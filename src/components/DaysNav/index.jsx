import moment from "moment";
import { useMoralis, useMoralisQuery } from "react-moralis";

import {
  YEAR_FORMAT,
  MONTH_FORMAT,
  DAY_LABEL_FORMAT,
} from "../../utils/constants";
import DayCard from "../DayCard";
import LoadingIcon from "../LoadingIcon";

const DaysNav = ({ view }) => {
  const { user } = useMoralis();

  const { data: days, isLoading } = useMoralisQuery("Day", (query) =>
    query.equalTo("user", user).limit(100)
  );

  console.log(days);

  return isLoading ? (
    <LoadingIcon />
  ) : (
    <div className="row">
      {[
        ...Array(
          moment(
            `${view.year}/${view.month}`,
            `${YEAR_FORMAT}/${MONTH_FORMAT}`
          ).daysInMonth()
        ).keys(),
      ].map((day) => {
        const dayLabel = moment(
          `${view.month}/${day + 1}/${view.year}`,
          "MMMM/D/YYYY"
        ).format(DAY_LABEL_FORMAT);
        const dayRecord = days.find(
          (d) =>
            d.get("tokenId") ===
            `${user.get("ethAddress")}x${moment(dayLabel).unix()}`
        );
        return <DayCard dayRecord={dayRecord} dayLabel={dayLabel} key={day} />;
      })}
    </div>
  );
};

export default DaysNav;
