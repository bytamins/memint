import moment from "moment";
import { useEffect } from "react";

const MonthPill = () => null;

const MonthNav = ({ view, setView }) => {
  const today = moment();
  const twelveMonths = [...Array(12).keys()];
  console.log(twelveMonths);
  if (view.year !== today.format("YYYY")) {
    console.log(today.month());
  }

  useEffect(() => {
    console.log("Month Nav View Change", view.month);
  }, [view]);

  return view.year === today.format("YYYY") ? (
    <ul className="nav nav-pills flex-column">
      {[...Array(today.month() + 1).keys()].map((monthDiff) => {
        const monthLabel = moment()
          .subtract(monthDiff, "months")
          .format("MMMM");
        return (
          <li className="nav-item">
            <a
              className={`nav-link ${view.month === monthLabel && "active"}`}
              href="#top"
              onClick={() =>
                setView({
                  ...view,
                  month: monthLabel,
                })
              }>
              {monthLabel}
            </a>
          </li>
        );
      })}
    </ul>
  ) : (
    <ul className="nav nav-pills flex-column">
      {[...Array(12).keys()].map((monthDiff) => {
        const monthLabel = moment()
          .year(view.year)
          .startOf("year")
          .add(monthDiff, "month")
          .format("MMMM");
        return (
          <li className="nav-item">
            <a
              className={`nav-link ${view.month === monthLabel && "active"}`}
              href="#top"
              onClick={() =>
                setView({
                  ...view,
                  month: monthLabel,
                })
              }>
              {monthLabel}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default MonthNav;
