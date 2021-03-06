import { useState } from "react";
import moment from "moment";
import { useMoralis } from "react-moralis";

import MonthNav from "../../components/MonthNav";
import YearNav from "../../components/YearNav";
import { YEAR_FORMAT, MONTH_FORMAT, DAY_FORMAT } from "../../utils/constants";
import DaysNav from "../../components/DaysNav";
import PageTitle from "../../components/PageTitle";

const Calendar = () => {
  const { user } = useMoralis();
  const [view, setView] = useState({
    year: moment().format(YEAR_FORMAT),
    month: moment().format(MONTH_FORMAT),
    day: moment().format(DAY_FORMAT),
  });

  if (!user) {
    return null;
  }

  return (
    <div className="container mt-5">
      <PageTitle
        title="Calendar"
        description="You can mint any day between now &amp; the day you were born."
      />
      <div className="row mb-4">
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
        <div className="col-md-2 offset-md-4">
          {/* <h5 className="text-end">Year</h5> */}
          <YearNav view={view} setView={setView} />
        </div>
        <div className="col-md-2">
          {/* <h5 className="text-end">Month</h5> */}
          <MonthNav view={view} setView={setView} />
        </div>
      </div>
      <DaysNav view={view} />
    </div>
  );
};

export default Calendar;
