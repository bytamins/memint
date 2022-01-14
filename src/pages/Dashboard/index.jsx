import { useState, useEffect } from "react";
import { ethers } from "ethers";
import moment from "moment";
import MonthNav from "../../components/MonthNav";
import YearNav from "../../components/YearNav";
import { Link } from "react-router-dom";

const YEAR_FORMAT = "YYYY";
const MONTH_FORMAT = "MMMM";
const DAY_FORMAT = "D";

const Dashboard = () => {
  const today = moment();
  const user = {
    birthdate: "12/13/1991",
  };
  const [view, setView] = useState({
    year: moment().format(YEAR_FORMAT),
    month: moment().format(MONTH_FORMAT),
    day: moment().format(DAY_FORMAT),
  });

  useEffect(() => {
    console.log("VIEW CHANGE");
    console.log(view);
  }, [view]);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4 text-center mb-5">
          <h1>Dashboard</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <h5>Years</h5>
          <hr />
          <YearNav birthdate={user.birthdate} view={view} setView={setView} />
        </div>
        <div className="col-md-2">
          <h5>Months</h5>
          <hr />
          <MonthNav view={view} setView={setView} />
        </div>
        <div className="col-md-8">
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
              ).format("M/D/YY");
              return (
                <div className="col-md-4">
                  <div className="card mb-4">
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title">{dayLabel}</h5>
                      <p className="card-text text-muted">
                        Empty description...
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <Link
                            to={`/day/${moment(dayLabel).unix()}`}
                            className="btn btn-primary w-100">
                            Edit
                          </Link>
                        </div>
                        <div className="col-md-6">
                          <button className="btn btn-success w-100">
                            Mint
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;