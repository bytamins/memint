import { useState, useEffect } from "react";
import { ethers } from "ethers";
import moment from "moment";
import MonthNav from "../../components/MonthNav";
import YearNav from "../../components/YearNav";

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
        <div className="col-md-4 offset-md-4 text-center mt-5">
          <h1>Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h5>Years</h5>
          <YearNav birthdate={user.birthdate} view={view} setView={setView} />
        </div>
        <div className="col-md-3">
          <h3>Months</h3>
          <MonthNav view={view} setView={setView} />
        </div>
        <div className="col-md-6">
          <div className="row">
            {[
              ...Array(
                moment(
                  `${view.year}/${view.month}`,
                  `${YEAR_FORMAT}/${MONTH_FORMAT}`
                ).daysInMonth()
              ).keys(),
            ].map((day) => (
              <div className="col-md-4">
                <div class="card mb-4">
                  {/* <img src="..." class="card-img-top" alt="..." /> */}
                  <div class="card-body">
                    <h5 class="card-title">
                      {moment(
                        `${view.month}/${day + 1}/${view.year}`,
                        "MMMM/D/YYYY"
                      ).format("M/D/YY")}
                    </h5>
                    <p class="card-text text-muted">Empty description...</p>
                    <div className="row">
                      <div className="col-md-6">
                        <button class="btn btn-primary w-100">Edit</button>
                      </div>
                      <div className="col-md-6">
                        <button class="btn btn-primary w-100">Mint</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
