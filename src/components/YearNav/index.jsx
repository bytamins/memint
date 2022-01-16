import moment from "moment";
import { useMoralis } from "react-moralis";

import { YEAR_FORMAT } from "../../utils/constants";

const YearNav = ({ view, setView }) => {
  const { user } = useMoralis();

  const today = moment();

  return (
    <select
      className="form-select form-select-lg"
      value={view.year}
      onChange={(ev) =>
        setView({
          ...view,
          year: ev.target.value,
        })
      }>
      {[
        ...Array(
          today.diff(moment(user.get("birthdate_unix") * 1000), "years") + 2
        ).keys(),
      ].map((yearDiff) => (
        <option
          key={yearDiff}
          value={moment().subtract(yearDiff, "years").format(YEAR_FORMAT)}>
          {moment().subtract(yearDiff, "years").format(YEAR_FORMAT)}
        </option>
      ))}
    </select>
  );
};

export default YearNav;
