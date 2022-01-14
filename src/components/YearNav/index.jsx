import moment from "moment";
import { useEffect } from "react";

const YearNav = ({ birthdate, view, setView }) => {
  const today = moment();

  useEffect(() => {
    console.log("Month Nav View Change", view.month);
  }, [view]);

  return (
    <ul className="nav nav-pills flex-column">
      {[...Array(today.diff(moment(birthdate), "years") + 2).keys()].map(
        (yearDiff) => (
          <li className="nav-item">
            <a
              className={`nav-link ${
                view.year ===
                  moment().subtract(yearDiff, "years").format("YYYY") &&
                "active"
              }`}
              href="#top"
              onClick={() =>
                setView({
                  ...view,
                  year: moment().subtract(yearDiff, "years").format("YYYY"),
                })
              }>
              {moment().subtract(yearDiff, "years").format("YYYY")}
            </a>
          </li>
        )
      )}
    </ul>
  );
};

export default YearNav;
