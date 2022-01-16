import moment from "moment";
import { YEAR_FORMAT } from "../../utils/constants";

const MonthNav = ({ view, setView }) => {
  const today = moment();
  return view.year === today.format(YEAR_FORMAT) ? (
    <select
      className="form-select form-select-lg"
      value={view.month}
      onChange={(ev) =>
        setView({
          ...view,
          month: ev.target.value,
        })
      }>
      <option value="" disabled>
        Choose Month
      </option>
      {[...Array(today.month() + 1).keys()].map((monthDiff) => {
        const monthLabel = moment()
          .subtract(monthDiff, "months")
          .format("MMMM");
        return (
          <option key={monthLabel} value={monthLabel}>
            {monthLabel}
          </option>
        );
      })}
    </select>
  ) : (
    <select
      className="form-select form-select-lg"
      value={view.month}
      onChange={(ev) =>
        setView({
          ...view,
          month: ev.target.value,
        })
      }>
      <option value="" disabled>
        Choose Month
      </option>
      {[...Array(12).keys()].map((monthDiff) => {
        const monthLabel = moment()
          .year(view.year)
          .startOf("year")
          .add(monthDiff, "month")
          .format("MMMM");
        return (
          <option key={monthLabel} value={monthLabel}>
            {monthLabel}
          </option>
        );
      })}
    </select>
  );
};

export default MonthNav;
