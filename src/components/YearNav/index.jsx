import { useEffect } from "react";
import moment from "moment";
import { useMoralis } from "react-moralis";

import { YEAR_FORMAT } from "../../utils/constants";

const YearNav = ({ view, setView }) => {
  const { user } = useMoralis();

  const today = moment();

  useEffect(() => {
    console.log("Month Nav View Change", view.month);
  }, [view]);

  return (
    <ul className="nav nav-pills flex-column mb-4">
      {[
        ...Array(
          today.diff(moment(user.get("birthdate_unix") * 1000), "years") + 2
        ).keys(),
      ].map((yearDiff) => (
        <li className="nav-item" key={yearDiff}>
          <a
            className={`nav-link ${
              view.year ===
                moment().subtract(yearDiff, "years").format(YEAR_FORMAT) &&
              "active"
            }`}
            href="#top"
            onClick={() =>
              setView({
                ...view,
                year: moment().subtract(yearDiff, "years").format(YEAR_FORMAT),
              })
            }>
            {moment().subtract(yearDiff, "years").format(YEAR_FORMAT)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default YearNav;
